package com.appraisal.appraisal.controller;

import com.appraisal.appraisal.model.Role;
import com.appraisal.appraisal.service.RolesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/roles")
public class RolesController {

    private final RolesService service;

    public RolesController(RolesService service) {
        this.service = service;
    }

    @GetMapping("/list")
    public List<Role> getAllRoles() {
        return service.getAllRoles();
    }

    @GetMapping("/{id}")
    public Role getRole(@PathVariable Long id) {
        return service.getRoleById(id);
    }

    @PostMapping
    public Role createRole(@RequestBody Role role) {
        return service.createRole(role);
    }

    @PutMapping("/{id}")
    public Role updateRole(@PathVariable Long id, @RequestBody Role role) {
        return service.updateRole(id, role);
    }

    @DeleteMapping("/{id}")
    public void deleteRole(@PathVariable Long id) {
        service.deleteRole(id);
    }
}
