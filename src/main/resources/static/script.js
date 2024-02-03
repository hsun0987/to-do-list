let url = "/api/todos/"
async function showTodo(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    document.querySelector('ul').innerHTML = "";

    for (let i in data){
        let li = document.createElement('li');
        li.id = data[i].id;

        if(data[i].done){
            li.className = "completed";
        }else{
            li.className = "";
        }

        let html= `
            ${data[i].todo}
        `
        li.innerHTML = html;
        document.querySelector('ul').append(li);
    }
}
showTodo();

async function addTodo(data){
    await fetch(url , {
        method: "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            todo: data,
            done: false,
        }),
    });
    showTodo();
}

document.querySelector('form').addEventListener('submit', (event => {
    event.preventDefault();
    let data = document.querySelector('input').value;
    addTodo(data);
}));

async function doneTodo(item){
    await fetch(url + item.id, {
        method: "PUT",
    });
    showTodo();
}

document.querySelector('ul').addEventListener('mousedown', (event => {
    let item = event.target;
    doneTodo(item);
}));
