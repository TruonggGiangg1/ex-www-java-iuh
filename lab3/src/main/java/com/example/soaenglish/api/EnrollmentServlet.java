package com.example.soaenglish.api;

import com.example.soaenglish.config.LearningPlatformContextListener;
import com.example.soaenglish.config.ServiceRegistry;
import com.example.soaenglish.model.EnrollmentReceipt;
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

@WebServlet(name = "EnrollmentServlet", urlPatterns = "/api/enrollments")
public class EnrollmentServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=UTF-8");
        String userId = req.getParameter("userId");
        String courseId = req.getParameter("courseId");

        try (PrintWriter writer = resp.getWriter()) {
            if (userId == null || courseId == null) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                writer.write("{\"error\":\"Missing userId or courseId\"}");
                return;
            }
            try {
                UserProgressService progressService = getProgressService(req);
                EnrollmentReceipt receipt = progressService.enroll(userId, courseId);
                UserProgress progress = progressService.getProgress(userId, courseId).orElse(null);
                writer.write(JsonUtils.toJson(receipt, progress));
            } catch (IllegalArgumentException ex) {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                writer.write("{\"error\":\"" + ex.getMessage().replace("\"", "'") + "\"}");
            }
        }
    }

    private UserProgressService getProgressService(HttpServletRequest req) {
        ServiceRegistry registry = (ServiceRegistry) req.getServletContext()
                .getAttribute(LearningPlatformContextListener.SERVICE_REGISTRY_KEY);
        return registry.getUserProgressService();
    }
}
