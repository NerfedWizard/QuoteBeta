package com.loeln.quoteapp.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuoteNotFoundExceptionResponse {

	private String quoteNotFound;

}
