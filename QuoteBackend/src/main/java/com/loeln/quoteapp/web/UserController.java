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
	 * Doesn't Work need something to make it so it just checks the username and
	 * logs them in Might just have to add security
	 */

	@PostMapping("/login")
	public ResponseEntity<?> logUserIn(@RequestBody String login) {
		return ResponseEntity.ok(null);
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		User newUser = userService.saveUser(user);

		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}

}
