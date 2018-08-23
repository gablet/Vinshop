package com.example.demo;



import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="orders")
@Entity
public class Order {

    @Id
    @GeneratedValue
    private int orderid;
    private int customerid;
    private int artikelnr;
    private int amount;
    private double sumprice;
    private String paymentmethod;

    public Order() {

    }

    public Order(int customerid, int artikelnr, int amount, double sumprice, String paymentmethod) {
        this.customerid = customerid;
        this.artikelnr = artikelnr;
        this.amount = amount;
        this.sumprice = sumprice;
        this.paymentmethod = paymentmethod;
    }

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public int getArtikelnr() {
        return artikelnr;
    }

    public void setArtikelnr(int artikelnr) {
        this.artikelnr = artikelnr;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public double getSumprice() {
        return sumprice;
    }

    public void setSumprice(double sumprice) {
        this.sumprice = sumprice;
    }

    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }
}
