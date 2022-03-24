// requisito 5 e 6
let btn = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');

let textInput = document.getElementById('texto-tarefa');

btn.addEventListener('click', function () {
    let newTask = document.createElement('li');
    newTask.innerText = textInput.value

    ol.appendChild(newTask);
    textInput.value = '';
});

// requisito 7 e 8
const listaOl = document.getElementById('lista-tarefas');

listaOl.addEventListener('click', function (event) {
    const itensLista = document.querySelectorAll('li');

    for (let i = 0; i < itensLista.length; i += 1) {
        itensLista[i].style.backgroundColor = 'white'; //todos são brancos
    }

    const itemClicado = event.target;
    itemClicado.style.backgroundColor = 'grey'; //os clicados serão cinza.
    // itemClicado.style.backgroundColor = 'rgba(216, 233, 182, 0.281)';
});

// requisito 9

listaOl.addEventListener('dblclick', function (event) {
    const completedTask = event.target;

    if (completedTask.className === '') {
        completedTask.className = 'completed';
    } else if (completedTask.className.includes('completed')) { //se for classList não retira o risco, pois a classe continuaria lá
        completedTask.className = '';
    }

});

// requisito 10 

const limpaLista = document.getElementById('apaga-tudo');

limpaLista.addEventListener('click', function () {
    listaOl.innerHTML = ''; // pesquisa: primeiro resultado ao pesquisar 'remove all child javascript'
});

// requisito 11

const limpaFinalizados = document.getElementById('remover-finalizados');

limpaFinalizados.addEventListener('click', function () {
    // const itemsLi = document.querySelectorAll('li');
    const clickdBtnFinalizados = document.querySelectorAll('.completed');
    for (let k = 0; k < clickdBtnFinalizados.length; k += 1) {
        clickdBtnFinalizados[k].remove();
    }

});

// requisito 12
