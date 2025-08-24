package com.example.lab1._22654701letruonggianglab1.servlet;


import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "bai5", value = "/bai5")
public class Bai5 extends HttpServlet {
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp) throws ServletException,
            IOException {
        resp.setContentType("text/html");
        PrintWriter out=resp.getWriter();
        String[] hobbies = req.getParameterValues("hobby");
        String test = "";
        for(int i = 0; i<hobbies.length; i++){
            test = test + " "+ hobbies[i];
        }

        out.println( req.getParameter("note") +" "+
                req.getParameter("name") +" "+
                req.getParameter("gender") +" "+
                test);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");

        String[] hobbies = req.getParameterValues("hobby");

        String test = "";

        for(int i = 0; i<hobbies.length; i++){
            test = test + " "+ hobbies[i];
        }

        PrintWriter out = resp.getWriter();
        out.println( req.getParameter("note") +" "+
        req.getParameter("name") +" "+
        req.getParameter("gender") +" "+
                test);

    }

}
