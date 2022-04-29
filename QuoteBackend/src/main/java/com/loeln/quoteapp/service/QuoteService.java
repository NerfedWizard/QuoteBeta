package com.loeln.quoteapp.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loeln.quoteapp.domain.Quote;
import com.loeln.quoteapp.repository.QuoteRepository;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class QuoteService {

	@Autowired
	QuoteRepository quoteRepo;

	@Transactional
	public List<Quote> getQuoteByAuthor(String author) {
		return quoteRepo.findByQuoteAuthor(capitalFirstLetter(author)).collect(Collectors.toList());
	}

	public List<Quote> getQuoteByCategory(String category) {
		return quoteRepo.findByQuoteCategory(category);
	}

	public Iterable<Quote> getQuotes() {
		return quoteRepo.findAll();
	}

	public Quote getQuoteById(String quoteIdentifier) {
		return quoteRepo.findQuoteByIdentifier(quoteIdentifier);
	}

	public String capitalFirstLetter(String word) {
		return Arrays.stream(word.toLowerCase().split("\\s+"))
				.map(t -> t.substring(0, 1).toUpperCase() + t.substring(1)).collect(Collectors.joining(" "));
	}
}
