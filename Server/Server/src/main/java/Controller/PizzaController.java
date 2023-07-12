package com.example.Server;

import org.springframework.stereotype.Component;

@Component
public class PizzaController {
    public static String getPizza(){
        return ("pizza is hot ");
    }
}
