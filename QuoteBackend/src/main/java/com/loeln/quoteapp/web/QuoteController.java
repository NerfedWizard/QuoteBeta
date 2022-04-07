package com.loeln.quoteapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.loeln.quoteapp.domain.Quote;
import com.loeln.quoteapp.service.QuoteService;

@Controller
@RequestMapping("/api/quote")
public class QuoteController {

	@Autowired
	QuoteService quoteService;

	@GetMapping("/all")
	public @ResponseBody Iterable<Quote> getQuotes() {
		return quoteService.getQuotes();
	}

	@GetMapping("/category/{category}")
	public @ResponseBody List<Quote> findQuotesByCategory(@PathVariable String category) {
		return quoteService.getQuoteByCategory(category.toLowerCase());
	}

	@GetMapping("/author/{author}")
	public @ResponseBody List<Quote> getAuthorQuotes(@PathVariable String author) {
		if (author.indexOf(',') != -1) {
			for (int i = 0; i < author.split(",").length; i++) {
				author = author.split(",")[0] + "%";
			}
		}
		return quoteService.getQuoteByAuthor(author);
	}

	@GetMapping("/{quoteId}")
	public ResponseEntity<?> getQuoteById(@PathVariable String quoteId) {
		Quote quote = quoteService.getQuoteById(quoteId);
		return new ResponseEntity<Quote>(quote, HttpStatus.OK);
	}
}
