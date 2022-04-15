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
			// Username has to be unique (exception)
			newUser.setUsername(newUser.getUsername());
			// Make sure that password and confirmPassword match
			// We don't persist or show the confirmPassword
			newUser.setConfirmPassword("");
			return userRepository.save(newUser);

		} catch (Exception e) {
			throw new DuplicateUsernameException(
					"Someone beat you to '" + newUser.getUsername() + "' or maybe you already registered");
		}

	}

//	public String addToFavorites() {
//		return "";
//	}
	/**
	 * I want to start with adding the quote identifier to an array To get the
	 * quotes all I would have to do is for loop through array grabbing each of the
	 * quotes and maybe populate a list to select you favorites
	 *
	 * This is exactly like getting the backlog for the project Project tasks 4
	 * repos: User Quote Backlog QuoteFavorites
	 *
	 */

}
