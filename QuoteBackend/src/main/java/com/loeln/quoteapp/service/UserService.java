package com.loeln.quoteapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loeln.quoteapp.domain.User;
import com.loeln.quoteapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User saveUser(User newUser) {

		newUser.setUsername(newUser.getUsername());

		return userRepository.save(newUser);

	}

}
