package com.example.englishcourse.lesson;

import com.example.englishcourse.course.Course;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "lessons")
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String title;

    private int duration;

    @Column(name = "media_url")
    private String mediaUrl;

    @Column(length = 2000)
    private String transcript;

    private int position;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    protected Lesson() {
    }

    public Lesson(String slug, String title, int duration, String mediaUrl, String transcript, int position) {
        this.slug = slug;
        this.title = title;
        this.duration = duration;
        this.mediaUrl = mediaUrl;
        this.transcript = transcript;
        this.position = position;
    }

    public Long getId() {
        return id;
    }

    public String getSlug() {
        return slug;
    }

    public String getTitle() {
        return title;
    }

    public int getDuration() {
        return duration;
    }

    public String getMediaUrl() {
        return mediaUrl;
    }

    public String getTranscript() {
        return transcript;
    }

    public int getPosition() {
        return position;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lesson lesson = (Lesson) o;
        return Objects.equals(id, lesson.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
