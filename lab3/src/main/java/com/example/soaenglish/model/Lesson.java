package com.example.soaenglish.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Lesson {
    private final String id;
    private final String title;
    private final String summary;
    private final List<Video> videos;
    private final List<PracticeExercise> exercises;

    public Lesson(String id, String title, String summary, List<Video> videos, List<PracticeExercise> exercises) {
        this.id = Objects.requireNonNull(id, "id");
        this.title = Objects.requireNonNull(title, "title");
        this.summary = Objects.requireNonNull(summary, "summary");
        this.videos = Collections.unmodifiableList(new ArrayList<>(Objects.requireNonNull(videos, "videos")));
        this.exercises = Collections.unmodifiableList(new ArrayList<>(Objects.requireNonNull(exercises, "exercises")));
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSummary() {
        return summary;
    }

    public List<Video> getVideos() {
        return videos;
    }

    public List<PracticeExercise> getExercises() {
        return exercises;
    }
}
