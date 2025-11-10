package com.example.soaenglish.model;

import java.util.Objects;

public class UserProfile {
    private final String id;
    private final String fullName;
    private final String email;

    public UserProfile(String id, String fullName, String email) {
        this.id = Objects.requireNonNull(id, "id");
        this.fullName = Objects.requireNonNull(fullName, "fullName");
        this.email = Objects.requireNonNull(email, "email");
    }

    public String getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }
}
