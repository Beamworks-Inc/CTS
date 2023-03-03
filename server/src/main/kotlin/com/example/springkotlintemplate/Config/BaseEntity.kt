package com.example.springkotlintemplate.Config

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
open class BaseEntity {
    @Id
    @GeneratedValue
    open var id: Long? = null
    constructor() {}
}