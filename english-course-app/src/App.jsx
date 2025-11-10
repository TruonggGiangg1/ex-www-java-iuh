import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Checkout from './pages/Checkout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CMS from './pages/CMS.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import LessonPlayer from './pages/LessonPlayer.jsx';
import AssessmentEntry from './pages/assessment/AssessmentEntry.jsx';
import AssessmentQuiz from './pages/assessment/AssessmentQuiz.jsx';
import AssessmentSpeaking from './pages/assessment/AssessmentSpeaking.jsx';
import AssessmentWriting from './pages/assessment/AssessmentWriting.jsx';
import RequireLogin from './pages/RequireLogin.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="course/:courseId" element={<CourseDetail />} />
      <Route
        path="checkout"
        element={
          <RequireLogin>
            <Checkout />
          </RequireLogin>
        }
      />
      <Route
        path="dashboard"
        element={
          <RequireLogin>
            <Dashboard />
          </RequireLogin>
        }
      />
      <Route
        path="dashboard/lessons/:lessonId"
        element={
          <RequireLogin>
            <LessonPlayer />
          </RequireLogin>
        }
      />
      <Route path="cms" element={<CMS />} />
      <Route path="login" element={<Login />} />
      <Route path="assessment" element={<AssessmentEntry />} />
      <Route path="assessment/quiz" element={<AssessmentQuiz />} />
      <Route path="assessment/speaking" element={<AssessmentSpeaking />} />
      <Route path="assessment/writing" element={<AssessmentWriting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
