package com.appraisal.appraisal.service;

import com.appraisal.appraisal.model.employee;
import com.appraisal.appraisal.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService{
    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository){
        this.repository= repository;
    }

    public List<employee> getAllEmployees(){
        return repository.findAll();
    }

    public employee getEmployeeById(Long Id) {
        return repository.findById(Id).orElse(null);
    }

    public employee saveEmployee(employee e){
        return repository.save(e);
    }

    public employee updateEmployee(Long id, employee updated) {
        employee existing = repository.findById(id).orElse(null);
        if(existing != null) {
            existing.setName(updated.getName());
            existing.setEmail(updated.getEmail());
            existing.setPhone(updated.getPhone());
            existing.setDesignation(updated.getDesignation());
            existing.setUpdatedAt(updated.getUpdatedAt());
            return repository.save(existing);
        }
        return null;
    }

    public void deleteEmployee(Long id){
        repository.deleteById(id);
    }
}



