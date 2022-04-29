package com.loeln.quoteapp.exceptions;

import lombok.Data;

@Data
public class InvalidLoginResponse {
	private String username;
	private String password;

	public InvalidLoginResponse() {
		this.username = "Check Username";
		this.password = "Check Password";
	}
}
