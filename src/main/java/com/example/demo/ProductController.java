package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class ProductController {
    private ProductRepository repository;


    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Product> listProducts(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return repository.findAll().stream()
                .filter(this::isGreat)
                .collect(Collectors.toList());
    }

    private boolean isGreat(Product product) {
        return !product.getName().equals("Red-Wine") &&
                !product.getName().equals("Blue-wine");
    }

}
