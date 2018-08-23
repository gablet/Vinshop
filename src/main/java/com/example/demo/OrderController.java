package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/createorder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createOrder(@RequestBody Customer customer, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        //repository.save(order);


        System.out.println("Helllo " + customer.getFirstname());
    }




}
