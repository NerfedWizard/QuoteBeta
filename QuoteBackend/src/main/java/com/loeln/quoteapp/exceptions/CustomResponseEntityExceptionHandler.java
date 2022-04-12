package com.loeln.quoteapp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@ExceptionHandler
	public final ResponseEntity<Object> handleQuoteIDException(QuoteIDException ex, WebRequest request) {
		QuoteIDExceptionResponse exceptionResponse = new QuoteIDExceptionResponse(ex.getMessage());
		return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectNotFoundException(QuoteNotFoundException ex, WebRequest request) {
		QuoteNotFoundExceptionResponse exceptionResponse = new QuoteNotFoundExceptionResponse(ex.getMessage());
		return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@ExceptionHandler
	public final ResponseEntity<Object> handleDuplicateUsernameException(DuplicateUsernameException ex,
			WebRequest request) {
		DuplicateUsernameResponse exceptionResponse = new DuplicateUsernameResponse(ex.getMessage());
		return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
	}
}
