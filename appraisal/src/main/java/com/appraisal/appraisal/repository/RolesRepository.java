package com.appraisal.appraisal.repository;


import com.appraisal.appraisal.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Role, Long> {
}