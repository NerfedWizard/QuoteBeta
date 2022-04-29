package com.loeln.quoteapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.loeln.quoteapp.domain.User;
import com.loeln.quoteapp.exceptions.DuplicateUsernameException;
import com.loeln.quoteapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public User saveUser(User newUser) {

		try {
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

			newUser.setUsername(newUser.getUsername());

			newUser.setConfirmPassword("");
			return userRepository.save(newUser);

		} catch (Exception e) {
			throw new DuplicateUsernameException(
					"Someone has '" + newUser.getUsername() + "' or maybe you already registered");
		}
	}

	public void userSignedIn(User newUser) {

	}
}
