package com.example.soaenglish.service;

import com.example.soaenglish.model.Course;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class CourseCatalogService {
    private final Map<String, Course> coursesById;

    public CourseCatalogService(Map<String, Course> coursesById) {
        this.coursesById = coursesById;
    }

    public List<Course> getAllCourses() {
        return new ArrayList<>(coursesById.values());
    }

    public Optional<Course> findCourse(String courseId) {
        return Optional.ofNullable(coursesById.get(courseId));
    }
}
