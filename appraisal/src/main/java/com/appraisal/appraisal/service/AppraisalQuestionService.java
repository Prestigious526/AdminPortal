package com.appraisal.appraisal.service;

import com.appraisal.appraisal.model.AppraisalQuestion;
import com.appraisal.appraisal.repository.AppraisalQuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppraisalQuestionService {

    private final AppraisalQuestionRepository repository;

    public AppraisalQuestionService(AppraisalQuestionRepository repository) {
        this.repository = repository;
    }

    public List<AppraisalQuestion> getAllQuestions() {
        return repository.findAll();
    }

    public AppraisalQuestion createQuestion(AppraisalQuestion q) {
        return repository.save(q);
    }

    public AppraisalQuestion getQuestionById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public AppraisalQuestion updateQuestion(Long id, AppraisalQuestion updated) {
        AppraisalQuestion existing = repository.findById(id).orElse(null);
        if (existing != null) {
            existing.setQuestion(updated.getQuestion());
            existing.setYear(updated.getYear());
            existing.setQuarter(updated.getQuarter());
            existing.setIsActive(updated.getIsActive());
            existing.setUpdatedAt(updated.getUpdatedAt());
            return repository.save(existing);
        }
        return null;
    }
    
    public void deleteQuestion(Long id) {
        repository.deleteById(id);
    }

    public List<AppraisalQuestion> getByYearAndQuarter(int year, int quarter) {
        return repository.findByYearAndQuarter(year, quarter);
    }
}





    

    


