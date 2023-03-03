package com.example.springkotlintemplate.Security

import com.example.springkotlintemplate.User.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException

class JPAUserDetailService(
    private val userRepository: UserRepository
): UserDetailsService {
    override fun loadUserByUsername(email: String): UserDetails {
        val user= userRepository.findByEmail(email) ?: throw UsernameNotFoundException("User $email not found")
        return org.springframework.security.core.userdetails.User(user.email, user.password, emptyList())
    }
}
