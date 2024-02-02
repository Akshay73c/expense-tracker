package com.akshay.backendspringboot.services;

import com.akshay.backendspringboot.entities.Expense;
import com.akshay.backendspringboot.entities.User;
import com.akshay.backendspringboot.repositories.ExpenseRepo;
import com.akshay.backendspringboot.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepo userRepo;
    ExpenseRepo expenseRepo;

    @Override
    public User getUserById(Long userId) {
        return userRepo.findById(userId).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User findByUsernameAndPassword(String username, String password) {
        return userRepo.findByUsernameAndPassword(username, password);
    }

    @Override
    public List<Expense> getAllExpenses(Long user_id) {
//        System.out.println(expenseRepo.findAllById(Collections.singleton(user_id)));
        return expenseRepo.getByUserId(user_id);
    }
}
