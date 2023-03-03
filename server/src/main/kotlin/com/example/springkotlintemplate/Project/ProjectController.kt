package com.example.springkotlintemplate.Project

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@Controller
@RequestMapping("/projects")
class ProjectController(
    private val projectService: ProjectService
) {
    @PostMapping
    fun createProject(@RequestBody projectDto: ProjectDto) {
        projectService.create(projectDto)
    }

}