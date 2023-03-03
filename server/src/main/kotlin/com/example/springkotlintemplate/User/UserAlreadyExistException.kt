package com.example.springkotlintemplate.User

import com.sun.jdi.request.InvalidRequestStateException

class UserAlreadyExistException: InvalidRequestStateException() {
    override val message: String?
        get() = "User already exists"
}
