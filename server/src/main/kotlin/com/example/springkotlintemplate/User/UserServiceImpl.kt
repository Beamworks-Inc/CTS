package com.example.springkotlintemplate.User

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserServiceImpl(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
): UserService {
    override fun registerUser(user: UserDTO) {
        if(userRepository.findByEmail(user.email) != null){
            throw UserAlreadyExistException()
        }
        userRepository.save(User(user.email, passwordEncoder.encode(user.password), user.role))
    }
}