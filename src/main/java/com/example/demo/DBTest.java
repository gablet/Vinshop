/**package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class DBTest {

        @Autowired
        DataSource dataSource;

        @RequestMapping(value = "/dbtest", produces = "text/plain")
        @ResponseBody
        public String testDb() throws SQLException {
            try (Connection conn = dataSource.getConnection();
                 Statement stmt = conn.createStatement();
//                 ResultSet rs = stmt.executeQuery("SELECT 1+1")) {
                 ResultSet rs = stmt.executeQuery("SELECT * FROM dbo.TestTable")) {
                rs.next();
//                int two = rs.getInt(1);
                String test = rs.getString("Name");
//                return "Database connectivity seems " + (two == 2 ? "OK." : "weird!");
            return test;
            }
        }

    }
 */

