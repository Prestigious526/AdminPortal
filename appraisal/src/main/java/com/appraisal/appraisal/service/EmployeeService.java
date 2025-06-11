package com.appraisal.appraisal.service;

import com.appraisal.appraisal.model.employee;
import com.appraisal.appraisal.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<employee> getAllEmployees() {
        return repository.findAll();
    }

    public employee saveEmployee(employee e) {
        return repository.save(e);
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}