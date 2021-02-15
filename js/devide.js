
function alertInputTrue(element, closestPerent) {
    //if(this.querySelector('.alert'))
    // если у ближайшего родителя есть элемент  с классом alert
    
    if (closestPerent.querySelector('.alert')) {
        //this.querySelector('.alert').remove();
        //находим указанный элемент по классу и удаляем его
        closestPerent.querySelector('.alert').remove();
        // удаляем класс красной обводки
        element.classList.remove('red-line');
    }
    return true;
}

function alertInputFalse(element, closestPerent, submit) {
    if (closestPerent.querySelector('.alert') == null) {
        submit.disabled = true;
        submit.classList.add('disabled-color');
        // если нет присваеваем значению обводку
        element.classList.add('red-line');
        //создаем элемент
        let divE = document.createElement("DIV");
        //вставляем его в конец после input 
        element.insertAdjacentElement('afterEnd', divE);
        //записываем Html внутрь div
        console.log(element.type);
        switch(element.type){
            case 'email':
            divE.innerText = `Поле ${element.type} должно содержать не мение 1 буквы до @ и .`;
            break;
            case 'text': 
            divE.innerText = `Поле ${element.type} должно содержать не меньше 3 букв`;
            break;
            case 'tel': 
            divE.innerText = `Поле ${element.type} должно содержать не меньше 10 цифр`;
            break;
        }
        //divE.innerHTML = `Поле ${element.type} должно содержать не мение 1 буквы до @ и .`;
        //доюавляем класс со стилями
        divE.classList.add('alert');
    }
    return false;
}

//closestPerent.querySelector('.alert').remove();