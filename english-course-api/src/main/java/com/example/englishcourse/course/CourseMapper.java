package com.example.englishcourse.course;

import com.example.englishcourse.course.dto.CourseResponse;
import com.example.englishcourse.course.dto.LessonResponse;
import com.example.englishcourse.lesson.Lesson;

import java.util.Comparator;
import java.util.List;

public final class CourseMapper {

    private CourseMapper() {
    }

    public static CourseResponse toResponse(Course course) {
        List<LessonResponse> lessons = course.getLessons().stream()
                .sorted(Comparator.comparingInt(Lesson::getPosition))
                .map(lesson -> new LessonResponse(
                        lesson.getSlug(),
                        lesson.getTitle(),
                        lesson.getDuration(),
                        lesson.getMediaUrl(),
                        lesson.getTranscript()
                ))
                .toList();

        return new CourseResponse(
                course.getSlug(),
                course.getTitle(),
                course.getDescription(),
                course.getLevel(),
                course.getCategory(),
                course.getRating(),
                course.getPrice(),
                course.getThumbnail(),
                List.copyOf(course.getSyllabus()),
                lessons
        );
    }
}
