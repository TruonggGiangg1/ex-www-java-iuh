package com.example.englishcourse.course.dto;

public record LessonResponse(
        String id,
        String title,
        int duration,
        String mediaUrl,
        String transcript
) {
}
