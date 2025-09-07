package com.example.lab3.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/form-course")
public class FormCourse extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Forward sang JSP để hiển thị form
        request.getRequestDispatcher("/form-course.jsp").forward(request, response);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setAttribute("firstName", request.getParameter("firstName"));
        request.setAttribute("lastName", request.getParameter("lastName"));
        request.setAttribute("date", request.getParameter("date"));
        request.setAttribute("month", request.getParameter("month"));
        request.setAttribute("year", request.getParameter("year"));
        request.setAttribute("email", request.getParameter("email"));
        request.setAttribute("numberPhone", request.getParameter("numberPhone"));
        request.setAttribute("gender", request.getParameter("gender"));
        request.setAttribute("address", request.getParameter("address"));
        request.setAttribute("city", request.getParameter("city"));
        request.setAttribute("code", request.getParameter("code"));
        request.setAttribute("country", request.getParameter("country"));
        request.setAttribute("state", request.getParameter("state"));
        request.setAttribute("course", request.getParameter("course"));

        // Forward sang trang kết quả
        request.getRequestDispatcher("/result-course.jsp").forward(request, response);
    }

}
