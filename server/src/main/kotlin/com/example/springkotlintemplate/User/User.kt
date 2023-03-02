package com.example.springkotlintemplate.User
enum class Role {
    RESEARCHER, REVIEWER, PI
}

data class User(
    val id: Long,
    val email: String,
    val password: String,
    val role: Role
)