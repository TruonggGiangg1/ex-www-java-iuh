package com.example.englishcourse.course;

import com.example.englishcourse.lesson.Lesson;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String description;

    @Column(nullable = false)
    private String level;

    @Column(nullable = false)
    private String category;

    private double rating;

    @Column(nullable = false)
    private BigDecimal price;

    private String thumbnail;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "course_syllabus", joinColumns = @JoinColumn(name = "course_id"))
    @Column(name = "item")
    @OrderColumn(name = "position")
    private List<String> syllabus = new ArrayList<>();

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @OrderBy("position ASC")
    private Set<Lesson> lessons = new LinkedHashSet<>();

    protected Course() {
    }

    public Course(String slug, String title, String description, String level, String category,
                  double rating, BigDecimal price, String thumbnail) {
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.level = level;
        this.category = category;
        this.rating = rating;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    public void addSyllabusItem(String item) {
        syllabus.add(item);
    }

    public void addLesson(Lesson lesson) {
        lesson.setCourse(this);
        lessons.add(lesson);
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

    public String getDescription() {
        return description;
    }

    public String getLevel() {
        return level;
    }

    public String getCategory() {
        return category;
    }

    public double getRating() {
        return rating;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public List<String> getSyllabus() {
        return syllabus;
    }

    public Set<Lesson> getLessons() {
        return lessons;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(id, course.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
