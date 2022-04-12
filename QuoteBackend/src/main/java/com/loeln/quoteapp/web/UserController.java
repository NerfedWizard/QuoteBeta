package com.loeln.quoteapp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loeln.quoteapp.domain.User;
import com.loeln.quoteapp.service.UserService;

@RestController
@RequestMapping("/api/quote/users")
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * Works for registering the user which is really all I would want. Just seeing
	 * who uses the site and maybe a way to see what quotes they look at. Keep
	 * working on how to secure it. Since it is going on live site.
	 */

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}

}
