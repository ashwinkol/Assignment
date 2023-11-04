package com.course.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@org.springframework.web.bind.annotation.CrossOrigin(origins = "*")

public class Controller {

	@RequestMapping("/Home")
	public String home() {
		return "Hello Home";
	}
	
	
}
