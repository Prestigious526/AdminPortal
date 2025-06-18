package com.appraisal.appraisal.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "appraisal_responses")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppraisalResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer employeeId;
    private Integer questionId;

    @Column(columnDefinition = "TEXT")
    private String answer;
    private Integer managerId;

    @Column(name = "manager_comment", columnDefinition = "TEXT")
    private String managerComment;
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();
}
