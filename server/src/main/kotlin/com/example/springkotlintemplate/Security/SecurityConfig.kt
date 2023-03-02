package com.example.springkotlintemplate.Security

import com.example.springkotlintemplate.User.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.web.SecurityFilterChain


@EnableWebSecurity
class SecurityConfig(
    @Autowired private val userRepository: UserRepository
) {


    @Bean
    fun passwordEncoder() = org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder()

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain{
        http
            .authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .httpBasic()
        return http.build()
    }

    @Bean
    fun userDetailsService(): UserDetailsService=JPAUserDetailService(userRepository)
}