package com.example.springkotlintemplate.User

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

enum class Role {
    RESEARCHER, REVIEWER, PI
}

@Entity
@Table(name = "users")
data class User(
    @Id
    @GeneratedValue(strategy = javax.persistence.GenerationType.AUTO)
    val id: Long? = null,
    val email: String,
    val password: String,
    val role: Role
) {
    constructor() : this(null, "", "", Role.RESEARCHER)
}

data class UserDTO(
    val email: String,
    val password: String,
    val role: Role
){
    fun toUser(): User{
        return User(null, email, password, role)
    }
}