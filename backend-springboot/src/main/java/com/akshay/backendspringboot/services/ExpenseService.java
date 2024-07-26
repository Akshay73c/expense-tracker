package com.akshay.backendspringboot.services;

import com.akshay.backendspringboot.entities.Expense;

import java.util.List;

public interface ExpenseService {
    public Expense saveExpense(Expense expense);
    public List<Expense> getByUserId(Long userId);


}
