package com.example.soaenglish.service;

import com.example.soaenglish.model.Course;
import com.example.soaenglish.model.EnrollmentReceipt;
import com.example.soaenglish.model.UserProgress;

import java.time.Instant;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

public class UserProgressService {
    private final Map<String, UserProgress> progressByKey = new ConcurrentHashMap<>();
    private final CourseCatalogService courseCatalogService;

    public UserProgressService(CourseCatalogService courseCatalogService) {
        this.courseCatalogService = courseCatalogService;
    }

    public EnrollmentReceipt enroll(String userId, String courseId) {
        String key = buildKey(userId, courseId);
        boolean existing = progressByKey.containsKey(key);
        if (!existing) {
            Course course = courseCatalogService.findCourse(courseId)
                    .orElseThrow(() -> new IllegalArgumentException("Course not found: " + courseId));
            UserProgress progress = new UserProgress(userId, courseId, 0, course.getLessons().size(), 0.0, Instant.now());
            progressByKey.put(key, progress);
        }
        UserProgress progress = progressByKey.get(key);
        progress.setLastActivity(Instant.now());
        return new EnrollmentReceipt(userId, courseId, existing, progress.getLastActivity());
    }

    public Optional<UserProgress> getProgress(String userId, String courseId) {
        return Optional.ofNullable(progressByKey.get(buildKey(userId, courseId)));
    }

    public void updateProgress(String userId, String courseId, int completedLessons, double newScore) {
        UserProgress progress = progressByKey.computeIfPresent(buildKey(userId, courseId), (key, existing) -> {
            existing.setCompletedLessons(Math.min(completedLessons, existing.getTotalLessons()));
            existing.setAverageScore(newScore);
            existing.setLastActivity(Instant.now());
            return existing;
        });
        if (progress == null) {
            throw new IllegalArgumentException("User is not enrolled in the course");
        }
    }

    private String buildKey(String userId, String courseId) {
        return userId + "::" + courseId;
    }
}
