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

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {

	/**
	 * Taking care of a warning not sure if I actually need it
	 */
	private static final long serialVersionUID = -5177807420952233985L;

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

	private Date create_At;

	private Date updated_At;

	@PrePersist
	protected void onCreate() {
		this.create_At = new Date();
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
