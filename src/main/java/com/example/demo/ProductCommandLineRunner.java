package com.example.demo;



import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.stream.Stream;

@Component
public class ProductCommandLineRunner implements CommandLineRunner {

    private final ProductRepository repository;

    public ProductCommandLineRunner(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Stream.of("Red-Wine", "White-Wine", "Blue-wine", "Purple-wine",
                "Yellow-wine").forEach(name ->
                repository.save(new Product(name))
        );
        repository.findAll().forEach(System.out::println);
    }
}
