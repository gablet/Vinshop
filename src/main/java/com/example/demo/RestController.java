/**
package com.example.demo;

import groovy.transform.AutoClone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    DataSource dataSource;

    @RequestMapping(value = "/", produces = "text/plain")
    @ResponseBody
    public String testDb() throws SQLException {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM dbo.TestTable")) {
            rs.next();
            String test = rs.getString("Name");
            return test;
        }
    }
}
 */
