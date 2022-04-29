package com.loeln.quoteapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loeln.quoteapp.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	User findByUsername(String username);

	User getById(Long id);

//	Stream<User> findByQuoteByFavorite(@Param("author") String author);
}