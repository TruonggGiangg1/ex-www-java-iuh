const { useEffect, useState, useMemo } = React;

const API_BASE = '/lab3/api';

const fetchJson = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      Accept: 'application/json',
    },
    ...options,
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Yêu cầu thất bại');
  }
  return response.json();
};

const Hero = ({ onCatalogClick }) => (
  <header className="hero">
    <h1>SOA English Academy</h1>
    <p>
      Hệ sinh thái học tiếng Anh trực tuyến xây dựng theo kiến trúc dịch vụ (SOA), cung cấp video, bài tập và lộ trình
      cá nhân hóa cho mọi kỹ năng.
    </p>
    <div className="hero-actions">
      <a className="btn btn-primary" href="#catalog" onClick={onCatalogClick}>
        Khám phá khóa học
      </a>
      <a className="btn btn-secondary" href="#services">Tìm hiểu dịch vụ</a>
    </div>
  </header>
);

const CourseCard = ({ course, onSelect }) => (
  <article className="course-card" onClick={() => onSelect(course.id)}>
    <div className="tag-list">
      <span className="tag">{course.level}</span>
      {course.skills.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <strong>{course.totalLessons} bài học</strong>
  </article>
);

const CourseCatalog = ({ courses, onSelect }) => (
  <section id="catalog" className="container">
    <h2 className="section-title">Chương trình học nổi bật</h2>
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onSelect={onSelect} />
      ))}
    </div>
  </section>
);

const LessonView = ({ lesson }) => (
  <div className="lesson-card">
    <h4>{lesson.title}</h4>
    <p>{lesson.summary}</p>
    <div>
      <strong>Video bài học</strong>
      <ol className="video-list">
        {lesson.videos.map((video) => (
          <li key={video.id}>
            <a href={video.url} target="_blank" rel="noreferrer">
              {video.title}
            </a>{' '}
            · {video.durationMinutes} phút
          </li>
        ))}
      </ol>
    </div>
    <div>
      <strong>Bài tập thực hành</strong>
      <ol className="exercise-list">
        {lesson.exercises.map((exercise) => (
          <li key={exercise.id}>
            <p>
              <strong>{exercise.title}</strong> ({exercise.type})
            </p>
            <p>{exercise.instructions}</p>
            <ul>
              {exercise.sampleQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const CourseDetail = ({ course }) => (
  <section id="course-detail" className="container">
    <h2 className="section-title">Chi tiết khóa học</h2>
    <div className="details-layout">
      <aside className="detail-panel">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="tag-list">
          <span className="tag">Trình độ: {course.level}</span>
          <span className="tag">{course.totalLessons} bài học</span>
          <span className="tag">{course.totalVideos} video</span>
          <span className="tag">{course.totalExercises} bài tập</span>
        </div>
        <h4>Kỹ năng trọng tâm</h4>
        <ul>
          {course.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </aside>
      <div>
        {course.lessons.map((lesson) => (
          <LessonView key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  </section>
);

const EnrollmentPanel = ({ courseId, onEnrollmentSuccess }) => {
  const [userId, setUserId] = useState('hv-demo');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const body = new URLSearchParams({ userId, courseId });
      const data = await fetchJson('/enrollments', {
        method: 'POST',
        body,
      });
      setStatus({ type: 'success', data });
      onEnrollmentSuccess(data.progress);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container" id="services">
      <div className="detail-panel">
        <h3>Đăng ký trải nghiệm</h3>
        <p>
          Điền mã học viên để đăng ký khóa học. Hệ thống sẽ tự động tạo lộ trình và đồng bộ tiến độ qua dịch vụ
          UserProgressService.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId">Mã học viên</label>
            <input
              id="userId"
              name="userId"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              placeholder="Ví dụ: hv001"
              required
            />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Đăng ký ngay'}
          </button>
        </form>
        {status && status.type === 'success' && (
          <div className="progress-box">
            <h4>Đăng ký thành công</h4>
            <p>
              {status.data.existingEnrollment
                ? 'Bạn đã đăng ký trước đó, tiến độ đã được cập nhật.'
                : 'Khóa học đã được kích hoạt cho bạn!'}
            </p>
            <p>Mã học viên: {status.data.userId}</p>
            <p>Mã khóa học: {status.data.courseId}</p>
          </div>
        )}
        {status && status.type === 'error' && <p>Không thể đăng ký: {status.message}</p>}
      </div>
    </section>
  );
};

const ProgressPanel = ({ progress }) => {
  const percent = useMemo(() => {
    if (!progress) return 0;
    if (progress.totalLessons === 0) return 0;
    return Math.round((progress.completedLessons / progress.totalLessons) * 100);
  }, [progress]);

  if (!progress) {
    return null;
  }

  return (
    <section className="container">
      <div className="progress-box">
        <h3>Tiến độ học tập</h3>
        <p>
          Hoàn thành {progress.completedLessons}/{progress.totalLessons} bài học · Điểm trung bình {progress.averageScore}
        </p>
        <div className="progress-bar">
          <span style={{ width: `${percent}%` }} />
        </div>
        <small>Lần cập nhật cuối: {new Date(progress.lastActivity).toLocaleString()}</small>
      </div>
    </section>
  );
};

const ArchitectureSection = () => (
  <section className="container">
    <h2 className="section-title">Kiến trúc dịch vụ SOA</h2>
    <div className="detail-panel">
      <p>
        Ứng dụng được chia thành các dịch vụ độc lập: <strong>CourseCatalogService</strong> cung cấp dữ liệu khóa học,
        <strong> UserProgressService</strong> theo dõi tiến độ, các API được đóng gói thành <code>CourseServlet</code>,
        <code> EnrollmentServlet</code> và <code>UserProgressServlet</code>. Các dịch vụ giao tiếp qua JSON REST API, cho
        phép dễ dàng mở rộng thành microservice trong tương lai.
      </p>
      <ul>
        <li>CourseServlet → Danh sách &amp; chi tiết khóa học</li>
        <li>EnrollmentServlet → Đăng ký học viên và đồng bộ tiến độ</li>
        <li>UserProgressServlet → Theo dõi tiến độ, cập nhật kết quả luyện tập</li>
        <li>CorsFilter → Cho phép front-end React truy cập đa miền</li>
      </ul>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>SOA English Academy © {new Date().getFullYear()} · Liên hệ: <a href="mailto:support@soaenglish.vn">support@soaenglish.vn</a></p>
  </footer>
);

const App = () => {
  const [courses, setCourses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJson('/courses')
      .then((data) => {
        setCourses(data);
        if (data.length > 0) {
          setSelectedId(data[0].id);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    fetchJson(`/courses/${selectedId}`)
      .then((data) => {
        setSelectedCourse(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [selectedId]);

  const handleEnrollmentSuccess = (latestProgress) => {
    setProgress(latestProgress);
  };

  return (
    <>
      <Hero onCatalogClick={() => {}} />
      {error && (
        <section className="container">
          <div className="detail-panel">
            <h3>Lỗi tải dữ liệu</h3>
            <p>{error}</p>
          </div>
        </section>
      )}
      {!error && (
        <>
          <CourseCatalog courses={courses} onSelect={setSelectedId} />
          {selectedCourse && <CourseDetail course={selectedCourse} />}
          {selectedId && <EnrollmentPanel courseId={selectedId} onEnrollmentSuccess={handleEnrollmentSuccess} />}
          <ProgressPanel progress={progress} />
          <ArchitectureSection />
        </>
      )}
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
