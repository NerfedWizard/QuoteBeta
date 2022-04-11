package com.loeln.quoteapp.repository;

import com.loeln.quoteapp.domain.User;

public interface UserRepository {

	User findByUsername(String username);

	User getById(Long id);

}
