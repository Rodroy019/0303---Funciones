const body = document.getElementById('key');

document.addEventListener("keydown", (e) => {
    if(e.key === 'a'){
        body.style.backgroundColor = 'pink';
    }else if(e.key === 's'){
        body.style.backgroundColor = 'orange';
    }else if(e.key === 'd'){
        body.style.backgroundColor = 'skyblue';
    }else if(e.key === 'q'){
        createNewDiv('purple');
    }else if(e.key === 'w'){
        createNewDiv('grey');
    }else if(e.key === 'e'){
        createNewDiv('brown');
    }   
}); 

let createNewDiv = (color) => {
    const newDiv = document.createElement('Div');
    newDiv.style.wight = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}