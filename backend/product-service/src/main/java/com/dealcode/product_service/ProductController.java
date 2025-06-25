package com.dealcode.productservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200") // Permite peticiones del frontend Angular
public class ProductController {

    @GetMapping("/list")
    public Map<String, String> getProducts() {
        return Map.of("name", "Juan Programador", "role", "Admin");
    }
}