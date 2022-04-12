package com.loeln.quoteapp.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotBlank(message = "Need a username Boss and make it clever")
	private String username;

	@NotBlank(message = "You're not Prince, going to need your full name")
	private String fullName;

	private Date create_At;

	@PrePersist
	protected void onCreate() {
		this.create_At = new Date();
	}

}
