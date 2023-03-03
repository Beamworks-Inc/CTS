package com.example.springkotlintemplate.User.PI

import com.example.springkotlintemplate.Project.Project
import com.example.springkotlintemplate.User.User
import javax.persistence.Entity
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "pi")
class PI: User() {
    @OneToMany(mappedBy = "pi")
    lateinit var projectIds: List<Project>
}