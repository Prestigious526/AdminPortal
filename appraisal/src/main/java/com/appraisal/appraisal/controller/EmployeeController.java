package com.appraisal.appraisal.controller;

import com.appraisal.appraisal.model.employee;
import com.appraisal.appraisal.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController{

    private final EmployeeService service;

    public EmployeeController(EmployeeService service){
        this.service= service;
    }

    @GetMapping("/list")
    public List<employee> getEmployees(){
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public employee getEmployeeById(@PathVariable Long id) {
        return service.getEmployeeById(id);
    }

    @GetMapping("/secure")
    public String secretEndpoint() {
        return "Only logged in users can see this";
    }

    public employee findByEmail(@RequestParam String email) {
        return service.findByEmail(email);
    }

    @PostMapping
    public employee createEmployee(@RequestBody employee employee){
        return service.saveEmployee(employee);
    }

    @PutMapping("/{id}")
    public employee update(@PathVariable Long id, @RequestBody employee employee) {
        return service.updateEmployee(id, employee);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteEmployee(id);
    }
}

