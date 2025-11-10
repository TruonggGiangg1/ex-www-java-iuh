package com.example.soaenglish.model;

import java.util.Objects;

public class Video {
    private final String id;
    private final String title;
    private final String url;
    private final int durationMinutes;

    public Video(String id, String title, String url, int durationMinutes) {
        this.id = Objects.requireNonNull(id, "id");
        this.title = Objects.requireNonNull(title, "title");
        this.url = Objects.requireNonNull(url, "url");
        this.durationMinutes = durationMinutes;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }
}
