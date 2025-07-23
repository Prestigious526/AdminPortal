package com.appraisal.appraisal.security;

import com.appraisal.appraisal.model.employee;
import com.appraisal.appraisal.repository.EmployeeRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final EmployeeRepository repo;

    public CustomUserDetailsService(EmployeeRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        employee user = repo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return User.builder()  //load user info by username
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().getRole().name())
                .build();
    }
}
