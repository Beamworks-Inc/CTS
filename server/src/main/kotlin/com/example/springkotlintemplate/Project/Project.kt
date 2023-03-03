package com.example.springkotlintemplate.Project

import com.example.springkotlintemplate.User.PI.PI
import com.example.springkotlintemplate.User.Researcher.Researcher
import com.example.springkotlintemplate.User.User
import org.springframework.web.multipart.MultipartFile
import javax.persistence.*

@Entity
data class Project (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0,
    val projectName: String,
    val description: String,
    @ElementCollection
    val data: List<ProjectData>,
    val form: FormComponent,
    @ManyToOne
    val pi: PI,
    @ManyToOne
    val researcher: Researcher,
    @ManyToMany
    val reviewers: List<User>,
) {
    constructor() : this(0, "", "", listOf(), FormComponent(), PI(), Researcher(), listOf())
}

@Embeddable
data class ProjectData(
    @Id
    val id: Long,
    val originalFileName: String,
    val reportFileName: String,
) {
    constructor() : this(0, "", "")
}

data class ProjectDto(
    val name: String,
    val description: String,
    val data: List<ProjectDataDto>,
    val form: FormComponent
)

@Embeddable
data class FormComponent(
    val type: String,
    val name: String,
    @ElementCollection
    val value: List<String>,
    val currentValue: String?
){
    constructor() : this("", "", listOf(), "")
}

data class ProjectDataDto(
    val id: Int? = null,
    val originalFile: MultipartFile? ,
    val reportFile: MultipartFile?
)