package com.akshay.backendspringboot.services;

import com.akshay.backendspringboot.entities.Expense;
import com.akshay.backendspringboot.repositories.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    @Autowired
    private ExpenseRepo expenseRepo;

    @Override
    public Expense saveExpense(Expense expense) {
        return expenseRepo.save(expense);
    }

    @Override
    public List<Expense> getByUserId(Long userId) {
        return expenseRepo.getByUserId(userId);
    }

}
