package com.appraisal.appraisal.service;

import com.appraisal.appraisal.model.AppraisalResponse;
import com.appraisal.appraisal.repository.AppraisalResponseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppraisalResponseService {

    private final AppraisalResponseRepository repository;

    public AppraisalResponseService(AppraisalResponseRepository repository) {
        this.repository = repository;
    }

    public List<AppraisalResponse> getAll() {
        return repository.findAll();
    }

    public AppraisalResponse getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<AppraisalResponse> getByEmployeeId(Integer employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    public List<AppraisalResponse> getByManagerId(Integer managerId) {
        return repository.findByManagerId(managerId);
    }

    public AppraisalResponse create(AppraisalResponse response) {
        return repository.save(response);
    }

    public AppraisalResponse update(Long id, AppraisalResponse updated) {
        Optional<AppraisalResponse> optional = repository.findById(id);
        if (optional.isPresent()) {
            AppraisalResponse existing = optional.get();
            existing.setAnswer(updated.getAnswer());
            existing.setManagerComment(updated.getManagerComment());
            existing.setUpdatedAt(updated.getUpdatedAt());
            return repository.save(existing);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
