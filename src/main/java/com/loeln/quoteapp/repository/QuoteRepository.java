package com.loeln.quoteapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loeln.quoteapp.domain.Quote;

@Repository
public interface QuoteRepository extends CrudRepository<Quote, Long> {

	List<Quote> findByQuoteCategory(String category);

	List<Quote> findByQuoteAuthor(String author);

	List<Quote> findByQuotePopularity(String popularity);

//
	Quote findQuoteById(Integer id);

}
