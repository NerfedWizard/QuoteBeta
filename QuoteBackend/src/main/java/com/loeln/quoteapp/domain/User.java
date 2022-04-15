package com.loeln.quoteapp.domain;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PostPersist;
import javax.persistence.PrePersist;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.Proxy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Proxy(lazy = false)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(unique = true)
	@NotBlank(message = "Need a username Boss and make it clever")
	private String username;

	@NotBlank(message = "You're not Prince, going to need your full name")
	private String fullName;

	@NotBlank(message = "You want security big shooter need a password")
	private String password;

	@Transient
	private String confirmPassword;

//	private String[] favoriteQuoteIDs;
	private Date created_At;
	private Date updated_At;

	/*
	 * This was fun and I think it would work just fine but this other way will show
	 * off more skills maybe
	 ***/

//	public void setFavoriteQuoteIDs(String favoriteQuoteID) {
//		int len = this.favoriteQuoteIDs.length + 1;
//		String[] tempIncrease = new String[len];
//		System.arraycopy(this.favoriteQuoteIDs, 0, tempIncrease, 0, len);
//		this.favoriteQuoteIDs = new String[len];
//		System.arraycopy(tempIncrease, 0, this.favoriteQuoteIDs, 0, len);
//	}
//
//	public String[] getFavoriteQuoteIDs() {
//		return this.favoriteQuoteIDs;
//	}

	@PrePersist
	protected void onCreate() {
		this.created_At = new Date();
	}

	@PostPersist
	protected void onUpdate() {
		this.updated_At = new Date();
	}

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}
}
