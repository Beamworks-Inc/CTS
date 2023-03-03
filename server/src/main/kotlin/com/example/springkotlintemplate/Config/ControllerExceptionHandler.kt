package com.example.springkotlintemplate.Config

import com.sun.jdi.request.InvalidRequestStateException
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ControllerExceptionHandler {

    @ExceptionHandler(InvalidRequestStateException::class)
    fun handleException(e: Exception): ResponseEntity<String> {
        return ResponseEntity.badRequest().body(e.message)
    }
}