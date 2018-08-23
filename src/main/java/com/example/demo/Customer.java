package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="Customer")
@Entity
public class Customer {

    @Id
    @GeneratedValue
    private int customerid;
    private String firstname;
    private String lastname;
    private String email;
    private String adress;
    private String adress2;
    private int zipcode;
    private String city;
    private String country;


}
