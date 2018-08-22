package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository repository;


    @PostMapping (value="/createorder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createOrder(@RequestBody Orders order) {





        repository.save(order);



        System.out.println(order.getArtikelnr());
    }






}
