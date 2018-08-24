package com.example.demo;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/createorder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createOrder(@RequestBody List<Product> products, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");

        System.out.println(products.get(0).getArtikelnr());
        System.out.println(products.get(1).getArtikelnr());

        for (Product product:products) {
            product.setLagersaldo(product.getLagersaldo()-1);
            repository.save(product);
        }




    }




}
