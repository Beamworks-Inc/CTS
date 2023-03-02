package com.example.springkotlintemplate.User

interface UserRepository{
    fun findByUsername(username: String): User?
}