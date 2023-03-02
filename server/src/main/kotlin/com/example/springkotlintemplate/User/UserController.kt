package com.example.springkotlintemplate.User

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping

@Controller
class UserController(
    private val userService: UserService
) {
    @PostMapping("/register")
    fun registerUser(user: UserDTO): String {
        userService.registerUser(user)
        return "Register Success"
    }
}

