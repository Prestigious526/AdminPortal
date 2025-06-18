package com.appraisal.appraisal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name= "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING) // This maps the enum to DB as string
    @Column(nullable= false)
    private RoleType role; 

    @Column(name= "created_at", columnDefinition= "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp createdAt;

    @Column(name= "updated_at", columnDefinition= "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp updatedAt;
}
