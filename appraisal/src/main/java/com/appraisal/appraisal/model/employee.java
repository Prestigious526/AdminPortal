package com.appraisal.appraisal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class employee {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Column(unique= true)
    private String phone;

    @Column(unique= true, nullable= false)
    private String email;

    @Column(nullable= false)
    private String password;

    @Column(nullable= false)
    private String designation;

    @ManyToOne
    @JoinColumn(name= "role_id")
    private Role role;

    @Column(name= "created_at", columnDefinition= "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp createdAt;

    @Column(name= "updated_at", columnDefinition= "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp updatedAt;
}
