<%@ page import="com.example.lab3.model.User" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 9/7/2025
  Time: 2:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>Registered Users</h2>
<table border="1">
    <tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
    </tr>
    <%
        List<User> users = (List<User>) request.getAttribute("users");
        for (User u : users) {
    %>
    <tr>
        <td><%= u.getId() %></td>
        <td><%= u.getFirstName() %> <%= u.getLastName() %></td>
        <td><%= u.getEmail() %></td>
        <td><%= u.getPhone() %></td>
    </tr>
    <% } %>
</table>
</body>
</html>
