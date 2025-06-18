package com.appraisal.appraisal.service;

import com.appraisal.appraisal.model.Role;
import com.appraisal.appraisal.repository.RolesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    private final RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public List<Role> getAllRoles() {
        return repository.findAll();
    }

    public Role getRoleById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Role createRole(Role role) {
        return repository.save(role);
    }

    public Role updateRole(Long id, Role updatedRole) {
        Role existing = repository.findById(id).orElse(null);
        if (existing != null) {
            existing.setRole(updatedRole.getRole());
            existing.setUpdatedAt(updatedRole.getUpdatedAt());
            return repository.save(existing);
        }
        return null;
    }

    public void deleteRole(Long id) {
        repository.deleteById(id);
    }
}

