package com.example.soaenglish.config;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;

@WebListener
public class LearningPlatformContextListener implements ServletContextListener {
    public static final String SERVICE_REGISTRY_KEY = "serviceRegistry";

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ServletContext context = sce.getServletContext();
        ServiceRegistry registry = new ServiceRegistry(DemoDataFactory.buildCourseCatalog());
        context.setAttribute(SERVICE_REGISTRY_KEY, registry);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        ServletContext context = sce.getServletContext();
        context.removeAttribute(SERVICE_REGISTRY_KEY);
    }
}
