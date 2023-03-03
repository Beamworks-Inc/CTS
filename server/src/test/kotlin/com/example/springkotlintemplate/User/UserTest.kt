package com.example.springkotlintemplate.User

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.post

@SpringBootTest
@ActiveProfiles("dev")
@AutoConfigureMockMvc
class UserTest{
    @Autowired
    private lateinit var mockMvc: MockMvc

    @Autowired
    private lateinit var userRepository: UserRepository

    val objectMapper = ObjectMapper()

    @AfterEach
    fun tearDown(){
        userRepository.deleteAll()
    }

    @Test
    fun `최초 로그인 시도시 401 반환`() {
        mockMvc.get("/login")
            .andExpect { status { isUnauthorized() } }
    }

    @Test
    fun `회원가입 요청 형식이 잘못된 경우 400 코드 반환`(){
        val userJson="{\"email\":\"email@email.com\"}"
        mockMvc.post("/register"){
            contentType = MediaType.APPLICATION_JSON
            content = userJson
        }.andExpect {
            status { isBadRequest() }
        }
    }

    @Test
    fun `회원가입 후 로그인 가능`() {
        //given
        val user= UserDTO("email@email.com", "password", Role.PI)
        //when
        mockMvc.post("/register"){
            contentType = MediaType.APPLICATION_JSON
            content = objectMapper.writeValueAsString(user)
        }.andExpect { status { isOk() } }
        //then
        mockMvc.get("/login"){
            with(httpBasic(user.email, user.password))
        }
            .andExpect { status { isNotFound() } }
    }

    @Test
    fun `이미 사용자가 존재하는데 회원가입을 한 경우 400 코드 및 메시지 반환`(){
        //given
        val user= UserDTO("email@email.com", "password", Role.PI)
        //when
        mockMvc.post("/register"){
            contentType = MediaType.APPLICATION_JSON
            content = objectMapper.writeValueAsString(user)
        }.andExpect { status { isOk() } }
        //then
        mockMvc.post("/register"){
            contentType = MediaType.APPLICATION_JSON
            content = objectMapper.writeValueAsString(user)
        }.andExpect {
            status { isBadRequest() }
            content { string("User already exists") }
        }
    }
}