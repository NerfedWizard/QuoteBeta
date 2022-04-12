package com.loeln.quoteapp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class QuoteNotFoundException extends RuntimeException {
	/**
	 * Maybe get rid of these after the fact
	 */
	private static final long serialVersionUID = -3617547583961408374L;

	public QuoteNotFoundException(String message) {
		super(message);
	}

}
