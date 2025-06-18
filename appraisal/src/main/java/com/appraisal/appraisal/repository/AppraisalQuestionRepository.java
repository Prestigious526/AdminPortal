package com.appraisal.appraisal.repository;
import com.appraisal.appraisal.model.AppraisalQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppraisalQuestionRepository extends JpaRepository<AppraisalQuestion, Long> {
    List<AppraisalQuestion> findByYearAndQuarter(int year, int quarter);
}
