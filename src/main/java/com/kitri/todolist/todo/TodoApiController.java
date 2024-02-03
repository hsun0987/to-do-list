package com.kitri.todolist.todo;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
@RequestMapping("/api/todos/")
public class TodoApiController {
    static HashMap <Integer, Todo> todos = new HashMap<>();
    int id = 10;

    @PostMapping("")
    public void add(@RequestBody Todo todo){
        todo.setId(id);
        todos.put(id++, todo);
    }

    @GetMapping("")
    public HashMap<Integer, Todo> show(){
        return todos;
    }

    @PutMapping("{id}")
    public void finish(@PathVariable int id){
        todos.get(id).setDone(!todos.get(id).isDone());
    }
}
