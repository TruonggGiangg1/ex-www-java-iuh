package com.example.soaenglish.model;

import java.time.Instant;
import java.util.Objects;

public class UserProgress {
    private final String userId;
    private final String courseId;
    private int completedLessons;
    private int totalLessons;
    private double averageScore;
    private Instant lastActivity;

    public UserProgress(String userId, String courseId, int completedLessons, int totalLessons, double averageScore, Instant lastActivity) {
        this.userId = Objects.requireNonNull(userId, "userId");
        this.courseId = Objects.requireNonNull(courseId, "courseId");
        this.completedLessons = completedLessons;
        this.totalLessons = totalLessons;
        this.averageScore = averageScore;
        this.lastActivity = Objects.requireNonNull(lastActivity, "lastActivity");
    }

    public String getUserId() {
        return userId;
    }

    public String getCourseId() {
        return courseId;
    }

    public int getCompletedLessons() {
        return completedLessons;
    }

    public void setCompletedLessons(int completedLessons) {
        this.completedLessons = completedLessons;
    }

    public int getTotalLessons() {
        return totalLessons;
    }

    public void setTotalLessons(int totalLessons) {
        this.totalLessons = totalLessons;
    }

    public double getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(double averageScore) {
        this.averageScore = averageScore;
    }

    public Instant getLastActivity() {
        return lastActivity;
    }

    public void setLastActivity(Instant lastActivity) {
        this.lastActivity = lastActivity;
    }
}
