package com.appraisal.appraisal.controller;

import com.appraisal.appraisal.model.AppraisalResponse;
import com.appraisal.appraisal.service.AppraisalResponseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appraisal-responses")
public class AppraisalResponseController {

    private final AppraisalResponseService service;

    public AppraisalResponseController(AppraisalResponseService service) {
        this.service = service;
    }

    @GetMapping("/list")
    public List<AppraisalResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AppraisalResponse getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/employee/{employeeId}")
    public List<AppraisalResponse> getByEmployee(@PathVariable Integer employeeId) {
        return service.getByEmployeeId(employeeId);
    }

    @GetMapping("/manager/{managerId}")
    public List<AppraisalResponse> getByManager(@PathVariable Integer managerId) {
        return service.getByManagerId(managerId);
    }

    @PostMapping
    public AppraisalResponse create(@RequestBody AppraisalResponse response) {
        return service.create(response);
    }

    @PutMapping("/{id}")
    public AppraisalResponse update(@PathVariable Long id, @RequestBody AppraisalResponse updated) {
        return service.update(id, updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
