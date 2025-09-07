<%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 9/7/2025
  Time: 2:08 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Result</title>
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
<div class="result">
    <h2>Student Information</h2>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Date of Birth:</b> ${date}/${month}/${year}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${numberPhone}</p>
    <p><b>Gender:</b> ${gender == 'true' ? 'Male' : 'Female'}</p>
    <p><b>Address:</b> ${address}, ${city}, ${state}, ${country}</p>
    <p><b>Postal Code:</b> ${code}</p>
    <p><b>Course:</b> ${course}</p>

    <a href="form-course">Back to Form</a>
</div>
</html>


