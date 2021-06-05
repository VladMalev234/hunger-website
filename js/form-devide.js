
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
    //console.log(closestPerent.querySelector('.alert'));
    if (closestPerent.querySelector('.alert') == null) {
        //console.log(closestPerent.querySelector('.alert'));
        closestPerent.parentNode.querySelector('input[type="submit"]').disabled = true;
        closestPerent.parentNode.querySelector('input[type="submit"]').classList.add('disabled-color');
        // если нет присваеваем значению обводку
        element.classList.add('red-line');
        //создаем элемент
        let divE = document.createElement("DIV");
        //вставляем его в конец после input 
        element.insertAdjacentElement('afterEnd', divE);
        //записываем Html внутрь div
        //console.log(element.type);
        switch(element.type){
            case 'email':
            divE.innerText = `The ${element.type} field should contain at least one letter before @ and .`;
            break;
            case 'text': 
            divE.innerText = `The ${element.type} field should contain at least three letter`;
            break;
            case 'tel': 
            divE.innerText = `The ${element.type} field should contain at least ten numbers`;
            break;
            case 'date' || 'time' :
            divE.innerHTML = `The ${e.target.type} field should be filled`;

        }
        //divE.innerHTML = `Поле ${element.type} должно содержать не мение 1 буквы до @ и .`;
        //доюавляем класс со стилями
        divE.classList.add('alert');
    }
    return false;
}

//closestPerent.querySelector('.alert').remove();