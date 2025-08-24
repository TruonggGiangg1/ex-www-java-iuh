package com.example.lab1._22654701letruonggianglab1.model;

public class User {
    private String name;
    private String address;

    public void setName(String name) {
        this.name = name;
    }

    public User(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public User() {

    }


    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }
}
