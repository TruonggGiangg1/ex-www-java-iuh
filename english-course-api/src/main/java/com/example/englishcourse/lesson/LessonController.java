package com.example.englishcourse.lesson;

import com.example.englishcourse.course.dto.LessonResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/lessons", produces = MediaType.APPLICATION_JSON_VALUE)
public class LessonController {

    private final LessonRepository lessonRepository;

    public LessonController(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    @GetMapping
    public List<LessonResponse> getLessons() {
        return lessonRepository.findAll().stream()
                .sorted((a, b) -> Integer.compare(a.getPosition(), b.getPosition()))
                .map(lesson -> new LessonResponse(
                        lesson.getSlug(),
                        lesson.getTitle(),
                        lesson.getDuration(),
                        lesson.getMediaUrl(),
                        lesson.getTranscript()
                ))
                .toList();
    }

    @GetMapping("/{slug}")
    public LessonResponse getLesson(@PathVariable String slug) {
        return lessonRepository.findBySlug(slug)
                .map(lesson -> new LessonResponse(
                        lesson.getSlug(),
                        lesson.getTitle(),
                        lesson.getDuration(),
                        lesson.getMediaUrl(),
                        lesson.getTranscript()
                ))
                .orElseThrow(() -> new LessonNotFoundException(slug));
    }
}
