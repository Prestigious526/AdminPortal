package com.appraisal.appraisal.repository;

import com.appraisal.appraisal.model.employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<employee, Long> {
}