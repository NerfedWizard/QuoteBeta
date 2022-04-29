package com.loeln.quoteapp.repository;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.loeln.quoteapp.domain.Quote;

@Repository
public interface QuoteRepository extends CrudRepository<Quote, Long> {

	List<Quote> findByQuoteCategory(String category);

	@Query(value = "select * from Quote where quote_author like :author", nativeQuery = true)
	Stream<Quote> findByQuoteAuthor(@Param("author") String author);

//	List<Quote> findByFavoriteQuoteID(String favoriteQuoteID);

//	List<Quote> findByFavoriteQuoteID(String favoriteQuoteID);

	Quote findQuoteByIdentifier(String quoteId);

}
