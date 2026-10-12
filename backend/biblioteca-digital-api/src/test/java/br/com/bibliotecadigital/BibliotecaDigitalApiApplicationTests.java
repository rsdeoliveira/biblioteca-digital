package br.com.bibliotecadigital;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
		"spring.mongodb.uri=mongodb://localhost:27017/",
		"spring.mongodb.database=biblioteca-digital-test"
})
class BibliotecaDigitalApiApplicationTests {

	@Test
	void contextLoads() {
	}

}
