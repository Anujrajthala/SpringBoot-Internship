package com.example.usermanagement.controller;
import com.example.usermanagement.repository.UserRepository;
import com.example.usermanagement.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //Adding User
    @PostMapping
    public Users addUser(@RequestBody Users user){
        return userRepository.save(user);
    }

    @GetMapping
    public List<Users> getAllUser(){
        return userRepository.findAll();
    }
}
