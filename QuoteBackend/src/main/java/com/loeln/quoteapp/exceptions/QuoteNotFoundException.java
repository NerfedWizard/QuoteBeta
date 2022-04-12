package com.loeln.quoteapp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class QuoteNotFoundException extends RuntimeException {


	public QuoteNotFoundException(String message) {
		super(message);
	}

}
