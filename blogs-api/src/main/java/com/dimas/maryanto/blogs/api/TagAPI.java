package com.dimas.maryanto.blogs.api;

import com.dimas.maryanto.blogs.model.Tag;
import com.dimas.maryanto.blogs.repository.TagRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tags")
public class TagAPI {

    @Autowired
    private TagRepository tagRepository;
    private final static Logger terminal = LoggerFactory.getLogger(TagAPI.class);

    @GetMapping(
            value = "/list",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<Tag> findAllWithPagination(Pageable page) {
        return tagRepository.findAll(page);
    }

    @PostMapping(
            value = "/submit",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Tag> submitDataTag(@RequestBody Tag tag) {
        tag = tagRepository.save(tag);
        return new ResponseEntity<>(tag, HttpStatus.OK);
    }

    @PostMapping(value = "/remove")
    public ResponseEntity<Tag> removeDataById(@RequestBody Tag tag) {
        tagRepository.delete(tag);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
