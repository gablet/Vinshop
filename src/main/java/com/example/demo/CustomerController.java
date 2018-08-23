package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;


    @RestController
    public class CustomerController {

        @Autowired
        private CustomerRepository repository;

        @CrossOrigin(origins = "http://localhost:3000")
        @PostMapping(value = "/createorder", consumes = MediaType.APPLICATION_JSON_VALUE)
        public void createCustomer(@RequestBody Customer customer, HttpServletResponse response) {
            response.setHeader("Access-Control-Allow-Origin", "*");
            repository.save(customer);
        }
}
