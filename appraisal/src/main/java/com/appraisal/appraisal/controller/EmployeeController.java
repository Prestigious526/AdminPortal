package com.appraisal.appraisal.controller;

import com.appraisal.appraisal.model.employee;
import com.appraisal.appraisal.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<employee> getEmployees() {
        return service.getAllEmployees();
    }

}