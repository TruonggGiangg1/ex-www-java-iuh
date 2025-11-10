package com.example.soaenglish.api;

import com.example.soaenglish.config.LearningPlatformContextListener;
import com.example.soaenglish.config.ServiceRegistry;
import com.example.soaenglish.model.UserProgress;
import com.example.soaenglish.service.UserProgressService;
import com.example.soaenglish.util.JsonUtils;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Optional;

@WebServlet(name = "UserProgressServlet", urlPatterns = "/api/users/*/progress")
public class UserProgressServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=UTF-8");
        String pathInfo = Optional.ofNullable(req.getPathInfo()).orElse("/");
        String courseId = req.getParameter("courseId");
        try (PrintWriter writer = resp.getWriter()) {
            if (pathInfo.equals("/") || courseId == null) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                writer.write("{\"error\":\"Missing userId or courseId\"}");
                return;
            }
            String userId = pathInfo.replaceFirst("^/", "").replaceFirst("/progress$", "");
            UserProgressService progressService = getProgressService(req);
            Optional<UserProgress> progress = progressService.getProgress(userId, courseId);
            if (progress.isPresent()) {
                writer.write(JsonUtils.toJson(progress.get()));
            } else {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                writer.write("{\"error\":\"Progress not found\"}");
            }
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=UTF-8");
        String pathInfo = Optional.ofNullable(req.getPathInfo()).orElse("/");
        String courseId = req.getParameter("courseId");
        String completedLessonsValue = req.getParameter("completedLessons");
        String scoreValue = req.getParameter("averageScore");

        PrintWriter writer = resp.getWriter();
        try {
            if (pathInfo.equals("/") || courseId == null || completedLessonsValue == null || scoreValue == null) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                writer.write("{\"error\":\"Missing userId, courseId or progress payload\"}");
                return;
            }
            String userId = pathInfo.replaceFirst("^/", "").replaceFirst("/progress$", "");
            int completedLessons = Integer.parseInt(completedLessonsValue);
            double score = Double.parseDouble(scoreValue);
            UserProgressService progressService = getProgressService(req);
            try {
                progressService.updateProgress(userId, courseId, completedLessons, score);
                Optional<UserProgress> updated = progressService.getProgress(userId, courseId);
                writer.write(JsonUtils.toJson(updated.orElse(null)));
            } catch (IllegalArgumentException ex) {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                writer.write("{\"error\":\"" + ex.getMessage().replace("\"", "'") + "\"}");
            }
        } catch (NumberFormatException ex) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            writer.write("{\"error\":\"Invalid number format\"}");
        }
    }

    private UserProgressService getProgressService(HttpServletRequest req) {
        ServiceRegistry registry = (ServiceRegistry) req.getServletContext()
                .getAttribute(LearningPlatformContextListener.SERVICE_REGISTRY_KEY);
        return registry.getUserProgressService();
    }
}
