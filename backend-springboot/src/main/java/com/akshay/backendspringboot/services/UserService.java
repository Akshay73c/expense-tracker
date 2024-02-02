package com.akshay.backendspringboot.services;

import com.akshay.backendspringboot.entities.Expense;
import com.akshay.backendspringboot.entities.User;

import java.util.List;

public interface UserService {
    public User getUserById(Long userId);

    public User saveUser(User user);

    public User findByUsernameAndPassword(String username, String password);

    public List<Expense> getAllExpenses(Long user_id);



}
