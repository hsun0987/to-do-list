let url = "/api/todos"
async function showTodo(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    for (let i in data){
        let li = document.createElement('li');
        li.id = data[i].id;
        li.className = "";

        let html= `
        ${data[i].todo}
    `
        li.innerHTML = html;
        document.querySelector('ul').append(li);
    }
}

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
    document.querySelector('ul').innerHTML = "";
    showTodo();
}

document.querySelector('form').addEventListener('submit', (event => {
    event.preventDefault();
    let data = document.querySelector('input').value;
    addTodo(data);
}));