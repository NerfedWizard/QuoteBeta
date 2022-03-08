package com.loeln.quoteapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quote {

	public Quote() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String quoteAuthor;
	private String quoted;
	private String quoteCategory;
	private Double quotePopularity;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getQuoted() {
		return quoted;
	}

	public void setQuoted(String quoted) {
		this.quoted = quoted;
	}

	public String getAuthor() {
		return quoteAuthor;
	}

	public void setAuthor(String author) {
		this.quoteAuthor = author;
	}

	public Double getPopularity() {
		return quotePopularity;
	}

	public void setPopularity(Double popularity) {
		this.quotePopularity = popularity;
	}

	public String getCategory() {
		return quoteCategory;
	}

	public void setCategory(String category) {
		this.quoteCategory = category;
	}

}
