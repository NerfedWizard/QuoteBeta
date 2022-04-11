package com.loeln.quoteapp.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String userIdentifier;
	@NotBlank(message = "Need a username Boss and make it clever")
	@Column(unique = true)
	private String username;
	private String fullname;
	private Date onCreate;
	private Date signin;

	@PrePersist
	protected void onCreate() {
		this.onCreate = new Date();
	}

	@PreUpdate
	protected void signin() {
		this.signin = new Date();
	}
}
