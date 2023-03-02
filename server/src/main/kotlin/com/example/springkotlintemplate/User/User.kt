package com.example.springkotlintemplate.User
enum class Role {
    RESEARCHER, REVIEWER, PI
}

data class User(
    val id: Long? = null,
    val email: String,
    val password: String,
    val role: Role
)

data class UserDTO(
    val email: String,
    val password: String,
    val role: Role
){
    fun toUser(): User{
        return User(null, email, password, role)
    }
}