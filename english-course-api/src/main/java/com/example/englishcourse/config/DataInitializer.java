package com.example.englishcourse.config;

import com.example.englishcourse.course.Course;
import com.example.englishcourse.course.CourseRepository;
import com.example.englishcourse.lesson.Lesson;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedDatabase(CourseRepository courseRepository) {
        return args -> {
            if (courseRepository.count() > 0) {
                return;
            }

            Course speakWithConfidence = new Course(
                    "speak-with-confidence",
                    "Speak with Confidence",
                    "Master everyday conversations with guided speaking practice and real feedback.",
                    "Beginner",
                    "Conversation",
                    4.9,
                    BigDecimal.valueOf(690_000),
                    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
            );
            speakWithConfidence.addSyllabusItem("Daily conversation drills");
            speakWithConfidence.addSyllabusItem("Pronunciation workouts");
            speakWithConfidence.addSyllabusItem("Interactive speaking labs");

            speakWithConfidence.addLesson(new Lesson(
                    "lesson-01",
                    "Introductions and Greetings",
                    18,
                    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
                    "Learn how to introduce yourself and start conversations confidently in English.",
                    1
            ));
            speakWithConfidence.addLesson(new Lesson(
                    "lesson-02",
                    "Pronunciation Clinic: Th sounds",
                    15,
                    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
                    "Practice both voiced and voiceless TH sounds with real-life examples.",
                    2
            ));
            speakWithConfidence.addLesson(new Lesson(
                    "lesson-03",
                    "Business Email Etiquette",
                    22,
                    "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
                    "Write professional emails and communicate clearly with clients.",
                    3
            ));

            Course businessPro = new Course(
                    "business-pro",
                    "Business English Pro",
                    "Develop the communication skills you need to thrive in modern workplaces.",
                    "Intermediate",
                    "Business",
                    4.8,
                    BigDecimal.valueOf(990_000),
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            );
            businessPro.addSyllabusItem("Meetings and presentations");
            businessPro.addSyllabusItem("Negotiation skills");
            businessPro.addSyllabusItem("Cross-cultural etiquette");

            businessPro.addLesson(new Lesson(
                    "lesson-04",
                    "Mastering Meetings",
                    20,
                    "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
                    "Lead meetings with confidence using structured agendas and actionable follow-ups.",
                    1
            ));
            businessPro.addLesson(new Lesson(
                    "lesson-05",
                    "Negotiation Tactics",
                    16,
                    "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
                    "Discover persuasive negotiation language for closing deals in English.",
                    2
            ));

            Course examLab = new Course(
                    "exam-lab",
                    "IELTS Exam Lab",
                    "Boost your band score with adaptive practice and expert teacher feedback.",
                    "Advanced",
                    "Test Prep",
                    4.7,
                    BigDecimal.valueOf(1_290_000),
                    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
            );
            examLab.addSyllabusItem("Mock exams");
            examLab.addSyllabusItem("Writing clinics");
            examLab.addSyllabusItem("Speaking simulations");

            examLab.addLesson(new Lesson(
                    "lesson-06",
                    "Listening Masterclass",
                    25,
                    "https://samplelib.com/lib/preview/mp4/sample-40s.mp4",
                    "Strategies to identify keywords, paraphrase, and answer under exam pressure.",
                    1
            ));
            examLab.addLesson(new Lesson(
                    "lesson-07",
                    "Band 7 Writing Blueprint",
                    30,
                    "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
                    "Structure high-scoring essays with coherence, cohesion, and lexical range.",
                    2
            ));

            courseRepository.save(speakWithConfidence);
            courseRepository.save(businessPro);
            courseRepository.save(examLab);
        };
    }
}
