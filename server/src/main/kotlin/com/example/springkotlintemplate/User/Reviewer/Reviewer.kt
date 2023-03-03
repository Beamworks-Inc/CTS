package com.example.springkotlintemplate.User.Reviewer

import com.example.springkotlintemplate.User.User
import javax.persistence.Embeddable
import javax.persistence.Entity
import javax.persistence.Table

enum class IsRadiologist{
    Yes, No, Trainee
}
@Embeddable
class ReviewerInfo{
    var isRadiologist: IsRadiologist = IsRadiologist.No
    var hasMoreThan3YearsOfExperience: Boolean = false
}

@Entity
@Table(name = "reviewer")
class Reviewer: User() {
    lateinit var reviewerInfo: ReviewerInfo
}