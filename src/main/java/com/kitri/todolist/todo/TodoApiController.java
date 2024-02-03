package com.kitri.todolist.todo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/todos")
public class TodoApiController {
    static HashMap <Integer, Todo> todos = new HashMap<>();
    int id = 10;

    @PostMapping("")
    public void add(@RequestBody Todo todo){
        todo.setId(id);
        todos.put(id++, todo);
    }
}
