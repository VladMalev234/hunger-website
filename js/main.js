
// !Form
const regexEm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTe = /\w{3}/;
const regexTel = /^\d{10}$/;
//const inputMail = document.querySelector('.email');
//const inputTel = document.querySelector('.telephone');
//const inputName = document.querySelector('.name');
const submit = document.querySelector('.form-button');
//const inputGroup = document.querySelectorAll('.question-form__group');
//const inputGroup = document.querySelectorAll('.question-form__group input');
let inputAll = document.querySelectorAll('.form-group input');
let inputAllContact = document.querySelectorAll('.form-group_contact input');
let inputDate = document.querySelector('input[type="date"]');
let formGroupLabel = document.querySelector('.form-group label');
// записываем изменяемые атрибуты для даты
let dateValue = new Date();
function setMinMaxDate() {
    let getMonthValue = ((dateValue.getMonth()+1) < 10) ? '0'+(dateValue.getMonth()+1) : (dateValue.getMonth()+1);
    let getDatehValue = ((dateValue.getDate()) < 10) ? '0'+(dateValue.getDate()) :(dateValue.getDate());
    console.log(getMonthValue, getDatehValue);
    inputDate.setAttribute("min", `${dateValue.getFullYear()+'-'+getMonthValue+'-'+getDatehValue}`);
}

setMinMaxDate();

//inputDate.setAttribute("max", `${dateValue.getFullYear()+'-'+'0'+((dateValue.getMonth()+1)+3)+'-'+'0'+dateValue.getDate()}`);

// Переменные для записи true при правильном заполнениии полей ввода
let isPhoneValidated;
let isPhoneValidatedSecond;
let isEmailValidated;
let isEmailValidatedSecond;
let isNameValidated;
let isNameValidatedSecond;
let isDateValidated;
let isSelectValidated;
let isTimeValidated;

//переменная для проверки временни
let inputDateValue;


// переменная для записи body для POST запроса 


const urlForm = 'https://jsonplaceholder.typicode.com/users';


// ставим по умолчанию disabled для кноаки
submit.disabled = true;
submit.classList.add('disabled-color');

//запускаем цикл по элементно при вводе для каждого инпута
inputAll.forEach((elem) => {
    elem.addEventListener('input', disabled);
});

inputAllContact.forEach((elem) => {
    elem.addEventListener('input', disabled);
});

document.querySelector('.select').addEventListener('click', (e)=> {
    document.querySelector('.select__dropdown').classList.toggle('select__dropdown_open');

});
document.querySelectorAll('.select__option').forEach((element)=> {
    element.addEventListener('click', (e) => {
        let valueOfDataset =  e.target.dataset.values;
        console.log(e.target.getAttribute('data-values'));
        console.log(e.target.dataset.values);
        document.querySelector('#select-type').value = valueOfDataset;
        document.querySelector('.select_checked').innerText = valueOfDataset;
        if(document.querySelector('#select-type').value != 'People') {
            isSelectValidated = true;
        } else {
            isSelectValidated = false;
        }
    });
})

//записываем е для того чтобі оперделять єлемент на которій нажали при input
function disabled(e) {
    // создаем переменную в которую записуем значение ближайшего родителя в который обернут инпут, для любого выбраного инпута
    let a = this.closest('.form-group');
    let b = e.target.parentNode;
    console.log(b.classList.value);
  //проверяем какой этот тип  input
    if(e.target.type == 'email') {
        // находим ближайшего родителя для выбраного input
        //проверяем  input на соответствие регулярному выражению
        if(regexEm.test(e.target.value)) {
           
            //if(this.querySelector('.alert'))
            // если у ближайшего родителя есть элемент  с классом alert
            if(b.classList.contains('form-group')){
                isEmailValidated = alertInputTrue(e.target, b);
            }
            else if(b.classList.contains('form-group_contact')){
                isEmailValidatedSecond = alertInputTrue(e.target, b);
            }
            //if(a.querySelector('.alert')) {
            //    //this.querySelector('.alert').remove();
            //    //находим указанный элемент по классу и удаляем его
            //    a.querySelector('.alert').remove();
            //    // удаляем класс красной обводки
            //    e.target.classList.remove('red-line');
            //}
              //если подтвердилось то записуем true в переменную
        //   isEmailValidated  = true;
            //если input не соответствие регулярному выражению
        } else {
            if(b.classList.contains('form-group')){
                console.log('dksdl');
                isEmailValidated = alertInputFalse(e.target, b, submit);
            }
            else if(b.classList.contains('form-group_contact')){
                console.log('dksdl!!!');
                isEmailValidatedSecond = alertInputFalse(e.target, b, submit);
            }
            // проверяем есть ли элемент с классом alert
            //if(a.querySelector('.alert') == null) {
            //    submit.disabled = true;
            //    submit.classList.add('disabled-color');
            //// если нет присваеваем значению обводку
            //    e.target.classList.add('red-line');
            //    //создаем элемент
            //    let divE = document.createElement("DIV");
            //    //вставляем его в конец после input 
            //    e.target.insertAdjacentElement('afterEnd', divE);
            //    //записываем Html внутрь div
            //    divE.innerHTML = `Поле ${e.target.type} должно содержать не мение 1 буквы до @ и
            //    заканчиваться на gmail.com`;
            //    //доюавляем класс со стилями
            //    divE.classList.add('alert');
            //    isEmailValidated  = true;
            //    console.log('false');
            //    //чтоб не срабатывал input встроенная проверка
            //    //return false;
            //}
        }
    } else if(e.target.type == 'text') {
        if(regexTe.test(e.target.value)) {
            if(b.classList.contains('form-group')){
                isNameValidated = alertInputTrue(e.target, b);
            }
            else if(b.classList.contains('form-group_contact')){
                isNameValidatedSecond = alertInputTrue(e.target, b);
            }
        } else {
            if(b.classList.contains('form-group')){
                console.log('dksdl');
                isNameValidated = alertInputFalse(e.target, b, submit);
            }
            else if(b.classList.contains('form-group_contact')){
                console.log('dksdl!!!');
                isNameValidatedSecond = alertInputFalse(e.target, b, submit);
            }
        }
        } else if(e.target.type == 'tel') {
            if(regexTel.test(e.target.value)) {
                if(b.classList.contains('form-group')){
                    isPhoneValidated = alertInputTrue(e.target, b);
                }
                else if(b.classList.contains('form-group_contact')){
                    isPhoneValidatedSecond = alertInputTrue(e.target, b);
                }
            } else {
                if(b.classList.contains('form-group')){
                    console.log('dksdl');
                    isPhoneValidated = alertInputFalse(e.target, b, submit);
                }
                else if(b.classList.contains('form-group_contact')){
                    console.log('dksdl!!!');
                    isPhoneValidatedSecond = alertInputFalse(e.target, b, submit);
                }
                }
            } else if(e.target.type == 'date') {
                //console.log(e.target.value);
                if(e.target.value) {
                    console.log(e.target.value);
                        inputDateValue = e.target.value;
                        // разделяем полученную строку на массив
                        inputDateValue = inputDateValue.split( '-');
                        let month = inputDateValue[1];
                        let date = inputDateValue[2];
                        formGroupLabel.innerHTML = `Date(${month} / ${date})`;
                    if(a.querySelector('.alert')) {
                        a.querySelector('.alert').remove();
                        e.target.classList.remove('red-line');
                    }
                    isDateValidated  = true;
                } 
                else {
                        if(a.querySelector('.alert') == null) {
                            submit.disabled = true;
                            submit.classList.add('disabled-color');
                            e.target.classList.add('red-line');
                            let divE = document.createElement("DIV");
                            e.target.insertAdjacentElement('afterEnd', divE);
                            divE.innerHTML = `Поле ${e.target.type} должно быть заполнено`;
                            divE.classList.add('alert');
                            console.log('false');
                            isDateValidated  = false;
                            //return false; 
                        } 
                    }
                } 
                else if(e.target.type == 'time') {
                    // Проверка на то введена ли уже дата посещения
                    if(inputDateValue) {
                        if(e.target.value) {
                            //проверка на то, чтоб нельзя было ввести прошедшее время 
                            let inputTimeValue = e.target.value;
                            //текущее время
                            let timeValueForCheck = dateValue.getHours() + ':' + dateValue.getMinutes();
                            //текущая дата
                            let dateValueForCheck = [dateValue.getFullYear()+ '', ('0'+(dateValue.getMonth()+1)), ('0'+(dateValue.getDate()))];
                            // преобразовываем массивы дат в строку и сравниваем их если они равны
                            if(inputDateValue.join() == dateValueForCheck.join()){
                                //если введенное время больше текущего времени
                                if(inputTimeValue >= timeValueForCheck) {
                                    if(a.querySelector('.alert')) {
                                        a.querySelector('.alert').remove();
                                        e.target.classList.remove('red-line');
                                    }
                                    isTimeValidated  = true;
                                }else {
                                    if(a.querySelector('.alert') == null) {
                                        console.log(e.target);
                                        submit.disabled = true;
                                        submit.classList.add('disabled-color');
                                        e.target.classList.add('red-line');
                                        let divE = document.createElement("DIV");
                                        console.log(divE);
                                        e.target.insertAdjacentElement('afterEnd', divE);
                                        divE.innerHTML = `Поле ${e.target.type} должно быть заполнено`;
                                        divE.classList.add('alert');
                                        console.log('false');
                                        isTimeValidated  = false;
                                        //return false; 
                                    } 
                                }
                            } else if(inputDateValue > dateValueForCheck) {
                                console.log('You can take all time you want');
                                isTimeValidated  = true;
                            }
                        } 
                    } else {
                        alert('Сначала введите дату на которую вы хотите забронировать столик');
                        e.target.value = '';
                    }
                }
            // если все значения перменных true то снимаем disabled  с кнопки
            console.log("isEmailValidated: ", isEmailValidated);
            console.log("isPhoneValidated: ", isPhoneValidated);
            console.log("isNameValidated: ", isNameValidated);
            if(isEmailValidated  && isPhoneValidated  && isNameValidated && isDateValidated && isTimeValidated  && isSelectValidated  ) {
                submit.disabled = false;
                submit.classList.remove('disabled-color');
            }else if(!isEmailValidated  || !isPhoneValidated  || !isNameValidated || !isDateValidated || !isDateValidated || !isSelectValidated){
                submit.disabled = true;
                submit.classList.add('disabled-color');
            }
    }


    submit.addEventListener('click', (element)=> {
        element.preventDefault();

        const body = {
            name: inputName.value,
            mail: inputMail.value,
            phone: inputTel.value,
        };
    submitReqest('POST', urlForm, body);
})


function submitReqest (method, url, body = null) {

    const headers = {
        'Content-Type': 'application/json' 
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    })
    .then(response=> {
        log(response)
    })
}
































    //inputDate.addEventListener('blur', (e)=> {
    //    console.log(e.target);
    //});

    