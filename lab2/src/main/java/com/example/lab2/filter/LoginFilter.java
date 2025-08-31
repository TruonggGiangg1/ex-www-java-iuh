package com.example.lab2.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter("/*")
public class LoginFilter implements Filter {

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        String uri = request.getRequestURI();
        String loginURI = request.getContextPath() + "/login";

        // Lấy username từ param và session
        String paramUser = request.getParameter("username");
        HttpSession session = request.getSession(false);
        String sessionUser = (session != null) ? (String) session.getAttribute("user") : null;

        // In ra log

        System.out.println("Username (param): " + paramUser);
        System.out.println("Username (session): " + sessionUser);

        boolean loginRequest = uri.equals(loginURI);
        boolean staticResource = uri.contains("/css/") || uri.contains("/js/");

        if (loginRequest || staticResource || uri.endsWith("/home") || sessionUser != null) {
            chain.doFilter(req, res);
        } else {

            response.sendRedirect(loginURI);
        }
    }
}
