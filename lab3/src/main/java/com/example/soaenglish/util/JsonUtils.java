package com.example.soaenglish.util;

import com.example.soaenglish.model.Course;
import com.example.soaenglish.model.EnrollmentReceipt;
import com.example.soaenglish.model.Lesson;
import com.example.soaenglish.model.PracticeExercise;
import com.example.soaenglish.model.UserProgress;
import com.example.soaenglish.model.Video;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public final class JsonUtils {
    private static final DateTimeFormatter ISO_FORMATTER = DateTimeFormatter.ISO_INSTANT;

    private JsonUtils() {
    }

    public static String toJson(List<Course> courses) {
        return courses.stream()
                .map(JsonUtils::courseSummary)
                .collect(Collectors.joining(",", "[", "]"));
    }

    public static String toJson(Course course) {
        String lessonsJson = course.getLessons().stream()
                .map(JsonUtils::lessonJson)
                .collect(Collectors.joining(","));

        String skillsJson = course.getSkills().stream()
                .map(JsonUtils::quote)
                .collect(Collectors.joining(","));

        return "{" +
                "\"id\":" + quote(course.getId()) + "," +
                "\"title\":" + quote(course.getTitle()) + "," +
                "\"level\":" + quote(course.getLevel()) + "," +
                "\"description\":" + quote(course.getDescription()) + "," +
                "\"skills\":[" + skillsJson + "]," +
                "\"totalLessons\":" + course.getLessons().size() + "," +
                "\"totalVideos\":" + course.getTotalVideos() + "," +
                "\"totalExercises\":" + course.getTotalExercises() + "," +
                "\"lessons\":[" + lessonsJson + "]" +
                "}";
    }

    public static String toJson(UserProgress progress) {
        if (progress == null) {
            return "null";
        }
        return "{" +
                "\"userId\":" + quote(progress.getUserId()) + "," +
                "\"courseId\":" + quote(progress.getCourseId()) + "," +
                "\"completedLessons\":" + progress.getCompletedLessons() + "," +
                "\"totalLessons\":" + progress.getTotalLessons() + "," +
                "\"averageScore\":" + String.format(Locale.US, "%.2f", progress.getAverageScore()) + "," +
                "\"lastActivity\":" + quote(ISO_FORMATTER.format(progress.getLastActivity())) +
                "}";
    }

    public static String toJson(EnrollmentReceipt receipt, UserProgress progress) {
        return "{" +
                "\"userId\":" + quote(receipt.getUserId()) + "," +
                "\"courseId\":" + quote(receipt.getCourseId()) + "," +
                "\"existingEnrollment\":" + receipt.isExistingEnrollment() + "," +
                "\"enrolledAt\":" + quote(ISO_FORMATTER.format(receipt.getEnrolledAt())) + "," +
                "\"progress\":" + toJson(progress) +
                "}";
    }

    private static String courseSummary(Course course) {
        return "{" +
                "\"id\":" + quote(course.getId()) + "," +
                "\"title\":" + quote(course.getTitle()) + "," +
                "\"level\":" + quote(course.getLevel()) + "," +
                "\"description\":" + quote(course.getDescription()) + "," +
                "\"skills\":[" + course.getSkills().stream().map(JsonUtils::quote).collect(Collectors.joining(",")) + "]," +
                "\"totalLessons\":" + course.getLessons().size() +
                "}";
    }

    private static String lessonJson(Lesson lesson) {
        String videos = lesson.getVideos().stream()
                .map(JsonUtils::videoJson)
                .collect(Collectors.joining(","));
        String exercises = lesson.getExercises().stream()
                .map(JsonUtils::exerciseJson)
                .collect(Collectors.joining(","));
        return "{" +
                "\"id\":" + quote(lesson.getId()) + "," +
                "\"title\":" + quote(lesson.getTitle()) + "," +
                "\"summary\":" + quote(lesson.getSummary()) + "," +
                "\"videos\":[" + videos + "]," +
                "\"exercises\":[" + exercises + "]" +
                "}";
    }

    private static String videoJson(Video video) {
        return "{" +
                "\"id\":" + quote(video.getId()) + "," +
                "\"title\":" + quote(video.getTitle()) + "," +
                "\"url\":" + quote(video.getUrl()) + "," +
                "\"durationMinutes\":" + video.getDurationMinutes() +
                "}";
    }

    private static String exerciseJson(PracticeExercise exercise) {
        String samples = exercise.getSampleQuestions().stream()
                .map(JsonUtils::quote)
                .collect(Collectors.joining(","));
        return "{" +
                "\"id\":" + quote(exercise.getId()) + "," +
                "\"title\":" + quote(exercise.getTitle()) + "," +
                "\"type\":" + quote(exercise.getType()) + "," +
                "\"instructions\":" + quote(exercise.getInstructions()) + "," +
                "\"sampleQuestions\":[" + samples + "]" +
                "}";
    }

    private static String quote(String value) {
        return "\"" + escape(value) + "\"";
    }

    private static String escape(String value) {
        return value
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r");
    }
}
