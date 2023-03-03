package com.example.springkotlintemplate.User

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseBody

@Controller
class UserController(
    private val userService: UserService
) {
    @PostMapping("/register")
    @ResponseBody
    fun registerUser(@RequestBody user: UserDTO): String {
        userService.registerUser(user)
        return "Register Success"
    }
}

