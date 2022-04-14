package com.loeln.quoteapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Proxy;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Proxy(lazy = false)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Quote {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String identifier;
	private String quoteAuthor;
	private String quoted;
	private String quoteCategory;
	private Double quotePopularity;

}
