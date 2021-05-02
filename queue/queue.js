let add = document.getElementById('add');
let remove = document.getElementById('remove');
let input;
let queues = document.getElementsByClassName('queue')[0];
let myAge = 20;

let queue = [];
let value;




function storeData(){
    let storage = JSON.parse(localStorage.getItem('queues'));
    for (let i = 0; i < storage.length; i++){
        queue.push(storage[i]);
        let element = document.createElement('div');
        element.classList.add('elements');
        element.innerText = queue[queue.length-1];
        queues.appendChild(element);
    }
}

storeData()


add.addEventListener('click', function(){
    input = document.getElementsByTagName('input')[0].value;
    if (queue.length === myAge ){
        alert('Queue is full, delete firstly');
        add.disabled = true;
        document.getElementsByTagName('input')[0].value = '';
    } else {
    if (input.length !== 0) {
        
        let element = document.createElement('div');
        element.classList.add('elements');
        document.getElementsByTagName('input')[0].value = '';
        queue.push(input);
        console.log(JSON.stringify(queue));
        localStorage.setItem('queues',JSON.stringify(queue));
        element.innerText = queue[queue.length-1];
        queues.appendChild(element);
 
        if ( remove.disabled === true){
            remove.disabled = false;
        }
    } else {
        alert('There is nothing to add to the queue');
    }
}
});



remove.addEventListener('click',function(){
    if (queue.length === 0 ){
        alert('There is nothing to delete');
        remove.disabled = true;
    }   
    let frstElem = document.getElementsByClassName('elements')[0];
    frstElem.remove();
    queue.shift();
    localStorage.setItem('queues',JSON.stringify(queue));
    if (add.disabled === true){
        add.disabled = false;
    }
 
})

