package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="Orders")
@Entity
public class Order {

    @Id
    @GeneratedValue
    private int orderid;

    private int customerid;
    private int artikelnr;
    private double amount;
    private double sumprice;
    private String paymentmethod;



}
