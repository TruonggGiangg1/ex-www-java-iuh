package com.example.soaenglish.api;

import com.example.soaenglish.config.LearningPlatformContextListener;
import com.example.soaenglish.config.ServiceRegistry;
import com.example.soaenglish.model.Course;
import com.example.soaenglish.service.CourseCatalogService;
import com.example.soaenglish.util.JsonUtils;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Optional;

@WebServlet(name = "CourseServlet", urlPatterns = "/api/courses/*")
public class CourseServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=UTF-8");
        CourseCatalogService courseService = getCourseService(req);
        String pathInfo = Optional.ofNullable(req.getPathInfo()).orElse("/");
        try (PrintWriter writer = resp.getWriter()) {
            if (pathInfo.equals("/") || pathInfo.isEmpty()) {
                List<Course> courses = courseService.getAllCourses();
                writer.write(JsonUtils.toJson(courses));
            } else {
                String courseId = pathInfo.replaceFirst("^/", "");
                Optional<Course> maybeCourse = courseService.findCourse(courseId);
                if (maybeCourse.isPresent()) {
                    writer.write(JsonUtils.toJson(maybeCourse.get()));
                } else {
                    resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                    writer.write("{\"error\":\"Course not found\"}");
                }
            }
        }
    }

    private CourseCatalogService getCourseService(HttpServletRequest req) {
        ServiceRegistry registry = (ServiceRegistry) req.getServletContext()
                .getAttribute(LearningPlatformContextListener.SERVICE_REGISTRY_KEY);
        return registry.getCourseCatalogService();
    }
}
