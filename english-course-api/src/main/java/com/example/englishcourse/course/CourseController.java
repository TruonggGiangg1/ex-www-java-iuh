package com.example.englishcourse.course;

import com.example.englishcourse.course.dto.CourseResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/courses", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<CourseResponse> getCourses() {
        return courseService.findAllCourses();
    }

    @GetMapping("/{slug}")
    public CourseResponse getCourse(@PathVariable String slug) {
        return courseService.findBySlug(slug);
    }
}
