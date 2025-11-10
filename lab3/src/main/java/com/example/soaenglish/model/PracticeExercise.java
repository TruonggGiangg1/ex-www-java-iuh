package com.example.soaenglish.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class PracticeExercise {
    private final String id;
    private final String title;
    private final String type;
    private final String instructions;
    private final List<String> sampleQuestions;

    public PracticeExercise(String id, String title, String type, String instructions, List<String> sampleQuestions) {
        this.id = Objects.requireNonNull(id, "id");
        this.title = Objects.requireNonNull(title, "title");
        this.type = Objects.requireNonNull(type, "type");
        this.instructions = Objects.requireNonNull(instructions, "instructions");
        this.sampleQuestions = Collections.unmodifiableList(new ArrayList<>(Objects.requireNonNull(sampleQuestions, "sampleQuestions")));
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    public String getInstructions() {
        return instructions;
    }

    public List<String> getSampleQuestions() {
        return sampleQuestions;
    }
}
