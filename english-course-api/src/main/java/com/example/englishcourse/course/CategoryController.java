package com.example.englishcourse.course;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/categories", produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryController {

    private final CourseService courseService;

    public CategoryController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<String> getCategories() {
        return courseService.findAllCategories();
    }
}
