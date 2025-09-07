package com.example.lab3.model;

public class Student {
    private String firstName;
    private String lastName;
    private int date;
    private int month;
    private int year;
    private String email;
    private String numberPhone;
    private boolean gender;
    private String address;
    private String city;
    private String code;
    private String country;
    private String state;
    private String course;

    public Student(String firstName, String lastName, int date, int month, int year, String email, String numberPhone, boolean gender, String address, String city, String code, String country, String state, String course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.month = month;
        this.year = year;
        this.email = email;
        this.numberPhone = numberPhone;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.code = code;
        this.country = country;
        this.state = state;
        this.course = course;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getDate() {
        return date;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }

    public String getEmail() {
        return email;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public boolean isGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getCode() {
        return code;
    }

    public String getCountry() {
        return country;
    }

    public String getState() {
        return state;
    }

    public String getCourse() {
        return course;
    }


}
