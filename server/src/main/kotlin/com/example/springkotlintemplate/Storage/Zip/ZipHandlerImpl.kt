package com.example.springkotlintemplate.Storage.Zip

import org.apache.tomcat.util.http.fileupload.IOUtils
import org.springframework.web.multipart.MultipartFile
import java.io.File
import java.io.FileOutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipInputStream

class ZipHandlerImpl: ZipHandler {
    override fun recursiveUnzip(zipFile: MultipartFile, destination: String) {
        //unzip file recursively
        val zipInputStream = ZipInputStream(zipFile.inputStream)
        val outputFolder= File(destination)

        // Loop through each entry in the zip file
        var entry: ZipEntry? = zipInputStream.nextEntry
        while (entry != null) {
            val filePath = outputFolder.toPath().resolve(entry.name).toFile()

            if (entry.isDirectory) {
                // Create the directory
                filePath.mkdirs()
            } else {
                // Create any necessary parent directories
                filePath.parentFile.mkdirs()

                // Write the file contents to disk
                val outputStream = FileOutputStream(filePath)
                IOUtils.copy(zipInputStream, outputStream)
                outputStream.close()
            }

            // Move to the next entry in the zip file
            entry = zipInputStream.nextEntry
        }

        // Close the input stream
        zipInputStream.close()

    }
}

