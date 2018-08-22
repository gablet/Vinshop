package com.example.demo;




import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="testtable")
@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long ID;

    private String Name;
    private String Country;

    public Product(String name, String country) {
        Name = name;
        Country = country;
    }

    public Product () {

    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    @Override
    public String toString() {
        return "Product{" +
                "ID=" + ID +
                ", Name='" + Name + '\'' +
                ", Country='" + Country + '\'' +
                '}';
    }
}



