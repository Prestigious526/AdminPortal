package com.appraisal.appraisal.repository;

import com.appraisal.appraisal.model.AppraisalResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppraisalResponseRepository extends JpaRepository<AppraisalResponse, Long> {
    List<AppraisalResponse> findByEmployeeId(Integer employeeId);
    List<AppraisalResponse> findByManagerId(Integer managerId);
}
