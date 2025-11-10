package com.example.soaenglish.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Course {
    private final String id;
    private final String title;
    private final String level;
    private final String description;
    private final List<String> skills;
    private final List<Lesson> lessons;

    public Course(String id, String title, String level, String description, List<String> skills, List<Lesson> lessons) {
        this.id = Objects.requireNonNull(id, "id");
        this.title = Objects.requireNonNull(title, "title");
        this.level = Objects.requireNonNull(level, "level");
        this.description = Objects.requireNonNull(description, "description");
        this.skills = Collections.unmodifiableList(new ArrayList<>(Objects.requireNonNull(skills, "skills")));
        this.lessons = Collections.unmodifiableList(new ArrayList<>(Objects.requireNonNull(lessons, "lessons")));
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLevel() {
        return level;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getSkills() {
        return skills;
    }

    public List<Lesson> getLessons() {
        return lessons;
    }

    public int getTotalVideos() {
        return lessons.stream().mapToInt(lesson -> lesson.getVideos().size()).sum();
    }

    public int getTotalExercises() {
        return lessons.stream().mapToInt(lesson -> lesson.getExercises().size()).sum();
    }
}
