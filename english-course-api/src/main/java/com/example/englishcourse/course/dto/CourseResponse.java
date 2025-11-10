package com.example.englishcourse.course.dto;

import java.math.BigDecimal;
import java.util.List;

public record CourseResponse(
        String id,
        String title,
        String description,
        String level,
        String category,
        double rating,
        BigDecimal price,
        String thumbnail,
        List<String> syllabus,
        List<LessonResponse> lessons
) {
}
