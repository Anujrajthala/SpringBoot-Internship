package com.example.usermanagement.repository;
import com.example.usermanagement.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<Users,Long> {
}
