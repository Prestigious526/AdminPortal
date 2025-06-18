package com.appraisal.appraisal.controller;

import com.appraisal.appraisal.model.AppraisalQuestion;
import com.appraisal.appraisal.service.AppraisalQuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class AppraisalQuestionController {

    private final AppraisalQuestionService service;

    public AppraisalQuestionController(AppraisalQuestionService service) {
        this.service= service;
    }

    @GetMapping("/list")
    public List<AppraisalQuestion> getAll() {
        return service.getAllQuestions();
    }

    @GetMapping("/{id}")
    public AppraisalQuestion getById(@PathVariable Long id) {
        return service.getQuestionById(id);
    }

    @GetMapping("/filter")
    public List<AppraisalQuestion> getByYearAndQuarter(@RequestParam int year, @RequestParam int quarter) {
        return service.getByYearAndQuarter(year, quarter);
    }

    @PostMapping
    public AppraisalQuestion create(@RequestBody AppraisalQuestion question) {
        return service.createQuestion(question);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteQuestion(id);
    }

    @PutMapping("/{id}")
    public AppraisalQuestion update(@PathVariable Long id, @RequestBody AppraisalQuestion updated) {
        return service.updateQuestion(id, updated);
    }
}




    

    

  

    

    

