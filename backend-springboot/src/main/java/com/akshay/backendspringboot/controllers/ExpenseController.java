package com.akshay.backendspringboot.controllers;

import com.akshay.backendspringboot.entities.Expense;
import com.akshay.backendspringboot.entities.User;
import com.akshay.backendspringboot.services.ExpenseService;
import com.akshay.backendspringboot.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin()
@RequestMapping("/api/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @Autowired
    private UserService userService;

    @PostMapping
    public Expense add(@RequestBody Expense expense, @RequestParam Long userID) {
        User user = userService.getUserById(userID); // Fetch the User object
        expense.setUser(user); // Set the User on the Expense
        return expenseService.saveExpense(expense);
    }



}
