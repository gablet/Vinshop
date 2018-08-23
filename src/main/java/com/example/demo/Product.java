package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="Product")
@Entity
public class Product {

    @Id
    private int Artikelnr;

    private int Nr;
    private String Namn;
    private String Namn2;
    private double Prisinklmoms;
    private double Volymiml;
    private double prisperliter;
    private String Varugrupp;
    private String Flaska;
    private String Ursprung;
    private String Ursprungsland;
    private String Producent;
    private String Leverantor;
    private int Argang;
    private double Alkoholhalt;
    private String produktbild;
    private int lagersaldo;
    private String isvisible;

    public Product() {

    }

    public Product(int artikelnr, int nr, String namn, String namn2, double prisinklmoms, double volymiml, double prisperliter, String varugrupp, String flaska, String ursprung, String ursprungsland, String producent, String leverantor, int argang, double alkoholhalt, String produktbild, int lagersaldo) {
        Artikelnr = artikelnr;
        Nr = nr;
        Namn = namn;
        Namn2 = namn2;
        Prisinklmoms = prisinklmoms;
        Volymiml = volymiml;
        this.prisperliter = prisperliter;
        Varugrupp = varugrupp;
        Flaska = flaska;
        Ursprung = ursprung;
        Ursprungsland = ursprungsland;
        Producent = producent;
        Leverantor = leverantor;
        Argang = argang;
        Alkoholhalt = alkoholhalt;
        this.produktbild = produktbild;
        this.lagersaldo = lagersaldo;
    }

    public int getArtikelnr() {
        return Artikelnr;
    }

    public void setArtikelnr(int artikelnr) {
        Artikelnr = artikelnr;
    }

    public int getNr() {
        return Nr;
    }

    public void setNr(int nr) {
        Nr = nr;
    }

    public String getNamn() {
        return Namn;
    }

    public void setNamn(String namn) {
        Namn = namn;
    }

    public String getNamn2() {
        return Namn2;
    }

    public void setNamn2(String namn2) {
        Namn2 = namn2;
    }

    public double getPrisinklmoms() {
        return Prisinklmoms;
    }

    public void setPrisinklmoms(double prisinklmoms) {
        Prisinklmoms = prisinklmoms;
    }

    public double getVolymiml() {
        return Volymiml;
    }

    public void setVolymiml(double volymiml) {
        Volymiml = volymiml;
    }

    public double getPrisperliter() {
        return prisperliter;
    }

    public void setPrisperliter(double prisperliter) {
        this.prisperliter = prisperliter;
    }

    public String getVarugrupp() {
        return Varugrupp;
    }

    public void setVarugrupp(String varugrupp) {
        Varugrupp = varugrupp;
    }

    public String getFlaska() {
        return Flaska;
    }

    public void setFlaska(String flaska) {
        Flaska = flaska;
    }

    public String getUrsprung() {
        return Ursprung;
    }

    public void setUrsprung(String ursprung) {
        Ursprung = ursprung;
    }

    public String getUrsprungsland() {
        return Ursprungsland;
    }

    public void setUrsprungsland(String ursprungsland) {
        Ursprungsland = ursprungsland;
    }

    public String getProducent() {
        return Producent;
    }

    public void setProducent(String producent) {
        Producent = producent;
    }

    public String getLeverantor() {
        return Leverantor;
    }

    public void setLeverantor(String leverantor) {
        Leverantor = leverantor;
    }

    public int getArgang() {
        return Argang;
    }

    public void setArgang(int argang) {
        Argang = argang;
    }

    public double getAlkoholhalt() {
        return Alkoholhalt;
    }

    public void setAlkoholhalt(double alkoholhalt) {
        Alkoholhalt = alkoholhalt;
    }

    public String getProduktbild() {
        return produktbild;
    }

    public void setProduktbild(String produktbild) {
        this.produktbild = produktbild;
    }

    public int getLagersaldo() {
        return lagersaldo;
    }

    public void setLagersaldo(int lagersaldo) {
        this.lagersaldo = lagersaldo;
    }

    public String getIsvisible() {
        return isvisible;
    }

    public void setIsvisible(String isvisible) {
        this.isvisible = isvisible;
    }
}



