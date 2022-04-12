package com.loeln.quoteapp.exceptions;

public class QuoteIDExceptionResponse {

	private String identifier;

	public QuoteIDExceptionResponse(String identifier) {
		this.identifier = identifier;
	}

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

}
