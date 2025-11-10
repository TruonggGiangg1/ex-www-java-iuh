package com.example.soaenglish.config;

import com.example.soaenglish.model.Course;
import com.example.soaenglish.model.Lesson;
import com.example.soaenglish.model.PracticeExercise;
import com.example.soaenglish.model.Video;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class DemoDataFactory {
    private DemoDataFactory() {
    }

    public static Map<String, Course> buildCourseCatalog() {
        Map<String, Course> catalog = new LinkedHashMap<>();

        Course pronunciation = new Course(
                "pronunciation-mastery",
                "Phát âm chuẩn như người bản xứ",
                "Beginner",
                "Khóa học xây dựng nền tảng phát âm tiếng Anh với 40 âm tiết IPA, kỹ thuật nối âm và ngữ điệu.",
                Arrays.asList("Pronunciation", "Listening", "Speaking"),
                List.of(
                        new Lesson(
                                "ipa-basics",
                                "Làm quen bảng phiên âm quốc tế",
                                "Học viên nắm được 44 âm tiết cơ bản và cách tạo khẩu hình chuẩn.",
                                Arrays.asList(
                                        new Video("ipa-overview", "Tổng quan về IPA", "https://www.youtube.com/embed/NcMCYzjA9XU", 18),
                                        new Video("mouth-shape", "Khẩu hình và hơi", "https://www.youtube.com/embed/Zxi8A8oqo4k", 22)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "ipa-quiz-1",
                                                "Quiz nhận diện âm",
                                                "quiz",
                                                "Nghe và lựa chọn âm tiết tương ứng.",
                                                Arrays.asList("/i:/ vs /ɪ/", "/æ/ vs /e/", "/ʌ/ vs /ɑ:/")
                                        ),
                                        new PracticeExercise(
                                                "ipa-record-1",
                                                "Ghi âm luyện tập",
                                                "speaking",
                                                "Đọc theo các câu mẫu và tải bản ghi âm lên hệ thống.",
                                                Arrays.asList("This is a simple sentence.", "She sells seashells.")
                                        )
                                )
                        ),
                        new Lesson(
                                "connected-speech",
                                "Nối âm và nuốt âm",
                                "Áp dụng nối âm, nuốt âm vào câu nói thường ngày.",
                                Arrays.asList(
                                        new Video("linking-sounds", "Kỹ thuật nối âm", "https://www.youtube.com/embed/Ac0lJIRX2k0", 15),
                                        new Video("reduction", "Hiện tượng nuốt âm", "https://www.youtube.com/embed/2uef0COEQmY", 17)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "connected-listening",
                                                "Nghe - điền từ",
                                                "listening",
                                                "Nghe hội thoại và điền các từ bị lược âm.",
                                                Arrays.asList("Do you want to", "What are you doing")
                                        ),
                                        new PracticeExercise(
                                                "connected-drill",
                                                "Drill thực hành",
                                                "speaking",
                                                "Đọc theo transcript và ghi âm.",
                                                Arrays.asList("Nice to meet you", "Could you help me?")
                                        )
                                )
                        )
                )
        );

        Course businessCommunication = new Course(
                "business-communication",
                "Tiếng Anh giao tiếp công sở",
                "Intermediate",
                "Thực hành các tình huống giao tiếp trong môi trường doanh nghiệp, từ viết email đến thuyết trình.",
                Arrays.asList("Communication", "Writing", "Presentation"),
                List.of(
                        new Lesson(
                                "email-etiquette",
                                "Viết email chuyên nghiệp",
                                "Nắm được cấu trúc email, cách viết tiêu đề, lời chào và chữ ký.",
                                Arrays.asList(
                                        new Video("email-structure", "Cấu trúc email", "https://www.youtube.com/embed/E5zkK_BOqgs", 14),
                                        new Video("tone-and-style", "Lựa chọn giọng điệu", "https://www.youtube.com/embed/H4BDhXpYmgE", 20)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "email-rewrite",
                                                "Chỉnh sửa email",
                                                "writing",
                                                "Biên tập lại email sai lỗi thành văn bản chuyên nghiệp.",
                                                Arrays.asList("Follow-up meeting", "Vacation request")
                                        ),
                                        new PracticeExercise(
                                                "email-template",
                                                "Xây dựng template",
                                                "project",
                                                "Thiết kế 3 mẫu email cho các tình huống phổ biến.",
                                                Arrays.asList("Chào đón nhân viên mới", "Thông báo cuộc họp", "Gửi báo giá")
                                        )
                                )
                        ),
                        new Lesson(
                                "presentation-skills",
                                "Thuyết trình thuyết phục",
                                "Chuẩn bị slide và luyện tập kỹ năng trình bày.",
                                Arrays.asList(
                                        new Video("storytelling", "Kể chuyện trong thuyết trình", "https://www.youtube.com/embed/8S0FDjFBj8o", 19),
                                        new Video("body-language", "Ngôn ngữ cơ thể", "https://www.youtube.com/embed/6-2LZgkXZTE", 16)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "presentation-outline",
                                                "Xây dựng dàn ý",
                                                "planning",
                                                "Lên dàn ý cho buổi thuyết trình 5 phút.",
                                                Arrays.asList("Giới thiệu dự án", "Báo cáo tiến độ")
                                        ),
                                        new PracticeExercise(
                                                "presentation-recording",
                                                "Ghi hình thuyết trình",
                                                "speaking",
                                                "Thực hành thuyết trình và tải video lên.",
                                                Arrays.asList("Demo sản phẩm", "Giới thiệu bản thân")
                                        )
                                )
                        )
                )
        );

        Course examPreparation = new Course(
                "ielts-focus",
                "IELTS 6.5+ Toàn diện",
                "Upper-Intermediate",
                "Lộ trình luyện thi IELTS với giáo trình cập nhật, bài kiểm tra định kỳ và bộ đề độc quyền.",
                Arrays.asList("Listening", "Reading", "Writing", "Speaking"),
                List.of(
                        new Lesson(
                                "ielts-intro",
                                "Chiến lược làm bài IELTS",
                                "Giới thiệu cấu trúc đề thi và cách phân bổ thời gian.",
                                Arrays.asList(
                                        new Video("ielts-format", "Cấu trúc đề thi", "https://www.youtube.com/embed/G_0n7GxwK1g", 12),
                                        new Video("time-management", "Chiến lược thời gian", "https://www.youtube.com/embed/t1pMG8cWYeM", 18)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "mock-test-plan",
                                                "Lập kế hoạch luyện đề",
                                                "planning",
                                                "Xây dựng lịch luyện đề 4 tuần.",
                                                Arrays.asList("Phân bổ kỹ năng", "Đặt mục tiêu điểm số")
                                        ),
                                        new PracticeExercise(
                                                "test-analyzer",
                                                "Phân tích đề mẫu",
                                                "analysis",
                                                "Chỉ ra cấu trúc và chiến lược cho từng phần.",
                                                Arrays.asList("Listening part 2", "Writing task 1")
                                        )
                                )
                        ),
                        new Lesson(
                                "ielts-writing",
                                "Viết IELTS task 1 và task 2",
                                "Phân tích các dạng bài viết và mẫu câu ăn điểm.",
                                Arrays.asList(
                                        new Video("task1-graphs", "Mô tả biểu đồ", "https://www.youtube.com/embed/ECBLkNsy9Mg", 21),
                                        new Video("task2-ideas", "Phát triển ý cho task 2", "https://www.youtube.com/embed/NCWbKDvsz0Y", 23)
                                ),
                                Arrays.asList(
                                        new PracticeExercise(
                                                "task1-feedback",
                                                "Sửa bài task 1",
                                                "writing",
                                                "Nộp bài viết và nhận nhận xét chi tiết.",
                                                Arrays.asList("Biểu đồ tròn", "Biểu đồ cột")
                                        ),
                                        new PracticeExercise(
                                                "task2-outline",
                                                "Lập dàn ý task 2",
                                                "writing",
                                                "Xây dựng luận điểm và ví dụ minh họa.",
                                                Arrays.asList("Giáo dục", "Công nghệ")
                                        )
                                )
                        )
                )
        );

        catalog.put(pronunciation.getId(), pronunciation);
        catalog.put(businessCommunication.getId(), businessCommunication);
        catalog.put(examPreparation.getId(), examPreparation);

        return catalog;
    }
}
