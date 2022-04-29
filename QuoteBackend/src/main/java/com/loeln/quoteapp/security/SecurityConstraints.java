package com.loeln.quoteapp.security;

public class SecurityConstraints {
	public static final String SIGN_UP_URLS = "/api/quote/users/**";
	public static final String H2_URL = "h2-console/**";
	public static final String SECRET = "SecretKeyToGenJWTs";
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Authorization";
	public static final long EXPIRATION_TIME = 3600000; // 2 Hours
}
