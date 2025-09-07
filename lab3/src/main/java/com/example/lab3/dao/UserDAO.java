package com.example.lab3.dao;

import com.example.lab3.model.User;
import jakarta.persistence.*;

import java.util.List;

public class UserDAO {
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("studentPU");

    public void save(User user) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
        em.close();
    }

    public List<User> findAll() {
        EntityManager em = emf.createEntityManager();
        List<User> users = em.createQuery("SELECT u FROM User u", User.class).getResultList();
        em.close();
        return users;
    }
}