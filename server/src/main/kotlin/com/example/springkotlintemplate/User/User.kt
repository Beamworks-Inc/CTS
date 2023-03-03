package com.example.springkotlintemplate.User

import com.example.springkotlintemplate.Config.BaseEntity
import com.example.springkotlintemplate.Project.Project
import javax.persistence.Embeddable
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table

enum class Role {
    RESEARCHER, REVIEWER, PI
}

@Entity
@Table(name = "users")
open class User: BaseEntity {
    var email: String = ""
    var password: String = ""
    var role: Role = Role.REVIEWER

    constructor() : super()
    constructor(email: String, password: String, role: Role) : super() {
        this.email = email
        this.password = password
        this.role = role
    }
}



data class UserDTO(
    val email: String,
    val password: String,
    val role: Role
)