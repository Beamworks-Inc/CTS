package com.example.springkotlintemplate.Storage.Zip

import org.springframework.web.multipart.MultipartFile

interface ZipHandler {
    fun recursiveUnzip(zipFile: MultipartFile, destination: String)
}