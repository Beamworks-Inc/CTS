package com.example.springkotlintemplate.Security

import com.example.springkotlintemplate.User.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Profile
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
    @Profile("dev")
    fun devFilterChain(http: HttpSecurity): SecurityFilterChain{
        http
            .csrf().disable()
            .headers().frameOptions().disable().and()
            .authorizeRequests()
            .antMatchers("/h2-console/**").permitAll()
            .antMatchers("/register").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic()
        return http.build()
    }

    @Bean
    @Profile("prod")
    fun prodFilterChain(http: HttpSecurity): SecurityFilterChain{
        http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/register").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic()
        return http.build()
    }

    @Bean
    fun userDetailsService(): UserDetailsService=JPAUserDetailService(userRepository)
}