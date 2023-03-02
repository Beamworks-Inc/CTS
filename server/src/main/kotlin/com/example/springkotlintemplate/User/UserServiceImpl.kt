package com.example.springkotlintemplate.User

import org.springframework.stereotype.Service

@Service
class UserServiceImpl(
    private val userRepository: UserRepository
): UserService {
    override fun registerUser(user: UserDTO) {
        if(userRepository.findByUsername(user.email) != null){
            throw Exception("User already exists")
        }
        userRepository.save(user.toUser())
    }
}