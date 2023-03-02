package com.example.springkotlintemplate.Security

import com.example.springkotlintemplate.User.Role
import com.example.springkotlintemplate.User.User
import com.example.springkotlintemplate.User.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Component

class JPAUserDetailService(
    private val userRepository: UserRepository
): UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails {
        val user= userRepository.findByUsername(username) ?: throw UsernameNotFoundException("User $username not found")
        return org.springframework.security.core.userdetails.User(user.email, user.password, emptyList())
    }
}
