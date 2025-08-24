package com.example.lab1._22654701letruonggianglab1.servlet;

import com.example.lab1._22654701letruonggianglab1.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;

@WebServlet(name = "bai3", value = "/bai3")
public class Bai3 extends HttpServlet {
    private User user;

    public void init() {
        user = new User("Test 1", "Test 2");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

       

        ObjectMapper objectMapper = new ObjectMapper();
        String userAsJson = objectMapper.writeValueAsString(user);

        resp.getWriter().write(userAsJson);
    }


}
