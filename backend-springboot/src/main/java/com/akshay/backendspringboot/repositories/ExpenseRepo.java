package com.akshay.backendspringboot.repositories;

import com.akshay.backendspringboot.entities.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExpenseRepo extends JpaRepository<Expense, Long> {
    @Query("SELECT e FROM Expense e WHERE e.user.user_id = :userId")
    public List<Expense> getByUserId(@Param("userId") Long userId);

}
