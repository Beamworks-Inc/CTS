package com.example.springkotlintemplate.Project

import org.springframework.stereotype.Service

@Service
class ProjectServiceImpl(
    private val projectRepository: ProjectRepository
): ProjectService {
    override fun create(projectDto: ProjectDto) {

    }

}