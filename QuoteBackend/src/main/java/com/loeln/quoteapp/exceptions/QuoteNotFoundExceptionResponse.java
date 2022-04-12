package com.loeln.quoteapp.exceptions;

public class QuoteNotFoundExceptionResponse {

	private String quoteNotFound;

	public QuoteNotFoundExceptionResponse(String quoteNotFound) {

	}

	public String getProjectNotFound() {
		return this.quoteNotFound;
	}

	public void setQuoteNotFound(String quoteNotFound) {
		this.quoteNotFound = quoteNotFound;
	}

}
