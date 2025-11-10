package com.example.soaenglish.model;

import java.time.Instant;
import java.util.Objects;

public class EnrollmentReceipt {
    private final String userId;
    private final String courseId;
    private final boolean existingEnrollment;
    private final Instant enrolledAt;

    public EnrollmentReceipt(String userId, String courseId, boolean existingEnrollment, Instant enrolledAt) {
        this.userId = Objects.requireNonNull(userId, "userId");
        this.courseId = Objects.requireNonNull(courseId, "courseId");
        this.existingEnrollment = existingEnrollment;
        this.enrolledAt = Objects.requireNonNull(enrolledAt, "enrolledAt");
    }

    public String getUserId() {
        return userId;
    }

    public String getCourseId() {
        return courseId;
    }

    public boolean isExistingEnrollment() {
        return existingEnrollment;
    }

    public Instant getEnrolledAt() {
        return enrolledAt;
    }
}
