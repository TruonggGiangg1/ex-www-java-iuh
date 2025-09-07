<%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 9/7/2025
  Time: 2:03 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Form course</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 500px;
            margin: 50px auto;
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            color: #333;
        }
        label {
            font-weight: bold;
            display: block;
            margin: 10px 0 5px;
        }
        input[type="text"], input[type="email"], input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        input[type="radio"] {
            margin-right: 5px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background: #4CAF50;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.3s;
        }
        input[type="submit"]:hover {
            background: #45a049;
        }
        .result {
            width: 500px;
            margin: 50px auto;
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .result p {
            font-size: 15px;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        a {
            display: inline-block;
            margin-top: 15px;
            text-decoration: none;
            padding: 8px 15px;
            background: #007BFF;
            color: white;
            border-radius: 5px;
            transition: 0.3s;
        }
        a:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Student Registration Form</h2>
    <form action="form-course" method="post">
        <label>First Name:</label>
        <input type="text" name="firstName">

        <label>Last Name:</label>
        <input type="text" name="lastName">

        <label>Date of Birth:</label>
        <input type="number" name="date" placeholder="dd" min="1" max="31">
        <input type="number" name="month" placeholder="mm" min="1" max="12">
        <input type="number" name="year" placeholder="yyyy">

        <label>Email:</label>
        <input type="email" name="email">

        <label>Phone:</label>
        <input type="text" name="numberPhone">

        <label>Gender:</label>
        <input type="radio" name="gender" value="true"> Male
        <input type="radio" name="gender" value="false"> Female

        <label>Address:</label>
        <input type="text" name="address">

        <label>City:</label>
        <input type="text" name="city">

        <label>Code:</label>
        <input type="text" name="code">

        <label>Country:</label>
        <input type="text" name="country">

        <label>State:</label>
        <input type="text" name="state">

        <label>Course:</label>
        <input type="text" name="course">

        <input type="submit" value="Submit">
    </form>
</div>
</body>
</html>
