package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletResponse;
import java.util.List;


@RestController
public class OrderController {

    @Autowired
    private OrderRepository repository;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/createorder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createOrder(@RequestBody List<Order> order, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");

        repository.save(order);

        //repository.save(order);
        //System.out.println(order.getArtikelnr());
    }


    /**@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/createorder", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<Customer> getOrder(HttpServletResponse response, HttpServletRequest request) {
        response.setHeader("Access-Control-Allow-Origin", "*");

        return null;
    }*/



}
