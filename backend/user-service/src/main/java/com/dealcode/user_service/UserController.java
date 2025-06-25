package com.dealcode.userservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200") // Permite peticiones del frontend Angular
public class UserController {

    @GetMapping("/profile")
    public Map<String, String> getUserProfile() {
        return Map.of("name", "Juan Programador", "role", "Admin");
    }
}