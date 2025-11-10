package com.example.englishcourse.lesson;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LessonRepository extends JpaRepository<Lesson, Long> {
    Optional<Lesson> findBySlug(String slug);
}
