package com.example.soaenglish.config;

import com.example.soaenglish.model.Course;
import com.example.soaenglish.service.CourseCatalogService;
import com.example.soaenglish.service.UserProgressService;

import java.util.Map;

public class ServiceRegistry {
    private final CourseCatalogService courseCatalogService;
    private final UserProgressService userProgressService;

    public ServiceRegistry(Map<String, Course> courses) {
        this.courseCatalogService = new CourseCatalogService(courses);
        this.userProgressService = new UserProgressService(courseCatalogService);
    }

    public CourseCatalogService getCourseCatalogService() {
        return courseCatalogService;
    }

    public UserProgressService getUserProgressService() {
        return userProgressService;
    }
}
