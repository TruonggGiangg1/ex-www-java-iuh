package com.example.lab1._22654701letruonggianglab1.servlet;

import com.example.lab1._22654701letruonggianglab1.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "bai4", value = "/bai4")
public class Bai4 extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();

        // Lấy init-param riêng cho servlet
        String greetings = getServletConfig().getInitParameter("Greetings");

        // Lấy context-param toàn cục
        ServletContext context = getServletContext();
        String country = context.getInitParameter("Country");
        String age = context.getInitParameter("Age");

        out.println("<html><body>");
        out.println("<h1>" + greetings + "</h1>");
        out.println("<p>Country: " + country + "</p>");
        out.println("<p>Age: " + age + "</p>");
        out.println("</body></html>");
    }

}
