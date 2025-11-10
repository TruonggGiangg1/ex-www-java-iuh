package com.example.englishcourse.course;

import com.example.englishcourse.course.dto.CourseResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<CourseResponse> findAllCourses() {
        return courseRepository.findAll().stream()
                .map(CourseMapper::toResponse)
                .toList();
    }

    public CourseResponse findBySlug(String slug) {
        return courseRepository.findBySlug(slug)
                .map(CourseMapper::toResponse)
                .orElseThrow(() -> new CourseNotFoundException(slug));
    }

    public List<String> findAllCategories() {
        return courseRepository.findAll().stream()
                .map(Course::getCategory)
                .distinct()
                .sorted()
                .toList();
    }
}
