package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name ="Product")
@Entity
public class Product {

    @Id
    @GeneratedValue
    private int artikelnr;

    private int nr;
    private String namn;
    private String namn2;
    private double prisinklmoms;
    private double volymiml;
    private double prisperliter;
    private String varugrupp;
    private String flaska;
    private String ursprung;
    private String ursprungsland;
    private String producent;
    private String leverantor;
    private int argang;
    private double alkoholhalt;
    private String produktbild;
    private int lagersaldo;
    private String isvisible;

    public Product() {

    }

    public Product(int nr, String namn, String namn2, double prisinklmoms, double volymiml, double prisperliter, String varugrupp, String flaska, String ursprung, String ursprungsland, String producent, String leverantor, int argang, double alkoholhalt, String produktbild, int lagersaldo, String isvisible) {
        this.nr = nr;
        this.namn = namn;
        this.namn2 = namn2;
        this.prisinklmoms = prisinklmoms;
        this.volymiml = volymiml;
        this.prisperliter = prisperliter;
        this.varugrupp = varugrupp;
        this.flaska = flaska;
        this.ursprung = ursprung;
        this.ursprungsland = ursprungsland;
        this.producent = producent;
        this.leverantor = leverantor;
        this.argang = argang;
        this.alkoholhalt = alkoholhalt;
        this.produktbild = produktbild;
        this.lagersaldo = lagersaldo;
        this.isvisible = isvisible;
    }

    public int getArtikelnr() {
        return artikelnr;
    }

    public void setArtikelnr(int artikelnr) {
        this.artikelnr = artikelnr;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }

    public String getNamn() {
        return namn;
    }

    public void setNamn(String namn) {
        this.namn = namn;
    }

    public String getNamn2() {
        return namn2;
    }

    public void setNamn2(String namn2) {
        this.namn2 = namn2;
    }

    public double getPrisinklmoms() {
        return prisinklmoms;
    }

    public void setPrisinklmoms(double prisinklmoms) {
        this.prisinklmoms = prisinklmoms;
    }

    public double getVolymiml() {
        return volymiml;
    }

    public void setVolymiml(double volymiml) {
        this.volymiml = volymiml;
    }

    public double getPrisperliter() {
        return prisperliter;
    }

    public void setPrisperliter(double prisperliter) {
        this.prisperliter = prisperliter;
    }

    public String getVarugrupp() {
        return varugrupp;
    }

    public void setVarugrupp(String varugrupp) {
        this.varugrupp = varugrupp;
    }

    public String getFlaska() {
        return flaska;
    }

    public void setFlaska(String flaska) {
        this.flaska = flaska;
    }

    public String getUrsprung() {
        return ursprung;
    }

    public void setUrsprung(String ursprung) {
        this.ursprung = ursprung;
    }

    public String getUrsprungsland() {
        return ursprungsland;
    }

    public void setUrsprungsland(String ursprungsland) {
        this.ursprungsland = ursprungsland;
    }

    public String getProducent() {
        return producent;
    }

    public void setProducent(String producent) {
        this.producent = producent;
    }

    public String getLeverantor() {
        return leverantor;
    }

    public void setLeverantor(String leverantor) {
        this.leverantor = leverantor;
    }

    public int getArgang() {
        return argang;
    }

    public void setArgang(int argang) {
        this.argang = argang;
    }

    public double getAlkoholhalt() {
        return alkoholhalt;
    }

    public void setAlkoholhalt(double alkoholhalt) {
        this.alkoholhalt = alkoholhalt;
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



