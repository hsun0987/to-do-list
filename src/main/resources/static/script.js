let url = "/api/todos"
async function addTodo(data){
    fetch(url , {
        method: "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            todo: data,
            done: false,
        }),
    });
}

document.querySelector('form').addEventListener('submit', (event => {
    event.preventDefault();
    let data = document.querySelector('input').value;
    addTodo(data);
}));