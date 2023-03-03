package com.example.springkotlintemplate.User.Researcher

import com.example.springkotlintemplate.Project.Project
import com.example.springkotlintemplate.User.User
import javax.persistence.Entity
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "researcher")
class Researcher: User() {
    @OneToMany(mappedBy = "researcher")
    lateinit var projectIds: List<Project>
}