package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import javax.servlet.http.HttpServletResponse;
import java.util.Collection;


@RestController
public class ProductController {
    private ProductRepository repository;


    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Product> listProducts(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
            List<Product> products = new ArrayList<>();
            return products = repository.findAll();
    }
}
