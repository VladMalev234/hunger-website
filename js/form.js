
// !Form
const regexEm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTe = /\w{3}/;
const regexTel = /^\d{10}$/;
const submit = document.querySelector('.form-button');
const submitAll = document.querySelectorAll('input[type="submit"]');
const inputAll = document.querySelectorAll('.form-group input');
const inputAllContact = document.querySelectorAll('.form-group_contact input');
const inputDate = document.querySelector('input[type="date"]');
const formGroupDateLabel = document.querySelector('.form-group label');

// записываем изменяемые атрибуты min для даты
let dateValue = new Date();
let getMonthValue ,  getDatehValue;
function setMinMaxDate() {
    getMonthValue = ((dateValue.getMonth()+1) < 10) ? '0'+(dateValue.getMonth()+1) : (dateValue.getMonth()+1);
    getDatehValue = ((dateValue.getDate()) < 10) ? '0'+(dateValue.getDate()) :(dateValue.getDate());
    console.log(getMonthValue, getDatehValue);
    inputDate.setAttribute("min", `${dateValue.getFullYear()+'-'+getMonthValue+'-'+getDatehValue}`);
    //inputDate.setAttribute("max", `${dateValue.getFullYear()+'-'+(+3+getMonthValue)+'-'+getDatehValue}`);
    
}
setMinMaxDate();

// Переменные для записи true при правильном заполнениии полей ввода
let isPhoneValidated, isPhoneValidatedSecond;
let isEmailValidated;
let isEmailValidatedSecond;
let isNameValidated;
let isNameValidatedSecond;
let isDateValidated;
let isSelectValidated;
let isTimeValidated;

//переменная для проверки временни
let inputDateValue;

const urlForm = 'https://jsonplaceholder.typicode.com/users';

// ставим по умолчанию disabled для кноаки
submitAll.forEach(elem=> {
    elem.disabled = true;
    elem.classList.add('disabled-color');
})

//запускаем цикл по элементно при вводе для каждого инпута основной формы
inputAll.forEach((elem) => {
    elem.addEventListener('input', disabled);
});

//запускаем цикл по элементно при вводе для каждого инпута второй формы
inputAllContact.forEach((elem) => {
    elem.addEventListener('input', disabled);
});

//функция проверки селекта
document.querySelector('.select').addEventListener('click', (e)=> {
    document.querySelector('.select__dropdown').classList.toggle('select__dropdown_open');

});
document.querySelectorAll('.select__option').forEach((element)=> {
    element.addEventListener('click', (e) => {
        let valueOfDataset =  e.target.dataset.values;
        //console.log(e.target.getAttribute('data-values'));
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
    let closestParent = e.target.parentNode;
  //проверяем какой этот тип  input
    if(e.target.type == 'email') {
        // находим ближайшего родителя для выбраного input
        //проверяем  input на соответствие регулярному выражению
        if(regexEm.test(e.target.value)) {
            // если у ближайшего родителя есть элемент  с классом alert
            if(closestParent.classList.contains('form-group')){
                //если подтвердилось то функция возвращае true в переменную
                isEmailValidated = alertInputTrue(e.target, closestParent);
            }
            else if(closestParent.classList.contains('form-group_contact')){
                isEmailValidatedSecond = alertInputTrue(e.target, closestParent);
            }
            //если input не соответствие регулярному выражению
        } else {
            if(closestParent.classList.contains('form-group')){
            //если подтвердилось то функция возвращае false в переменную
                isEmailValidated = alertInputFalse(e.target, closestParent, submit);
            }
            else if(closestParent.classList.contains('form-group_contact')){
                isEmailValidatedSecond = alertInputFalse(e.target, closestParent, submit);
            }

        }
    } else if(e.target.type == 'text') {
        if(regexTe.test(e.target.value)) {
            if(closestParent.classList.contains('form-group')){
                isNameValidated = alertInputTrue(e.target, closestParent);
            }
            else if(closestParent.classList.contains('form-group_contact')){
                //this.closest('input[type="submit"]');
                isNameValidatedSecond = alertInputTrue(e.target, closestParent);
            }
        } else {
            if(closestParent.classList.contains('form-group')){
                //console.log("form",closestParent.parentNode.querySelector('input[type="submit"]'));
                isNameValidated = alertInputFalse(e.target, closestParent, submit);
            }
            else if(closestParent.classList.contains('form-group_contact')){
                isNameValidatedSecond = alertInputFalse(e.target, closestParent, submit);
            }
        }
        } else if(e.target.type == 'tel') {
            if(regexTel.test(e.target.value)) {
                if(closestParent.classList.contains('form-group')){
                    isPhoneValidated = alertInputTrue(e.target, closestParent);
                }
                else if(closestParent.classList.contains('form-group_contact')){
                    isPhoneValidatedSecond = alertInputTrue(e.target, closestParent);
                }
            } else {
                if(closestParent.classList.contains('form-group')){
                    isPhoneValidated = alertInputFalse(e.target, closestParent, submit);
                }
                else if(closestParent.classList.contains('form-group_contact')){
                    isPhoneValidatedSecond = alertInputFalse(e.target, closestParent, submit);
                }
                }
            } else if(e.target.type == 'date') {
                //console.log(e.target.value);
                if(e.target.value) {
                    console.log(e.target.value);
                        inputDateValue = e.target.value;
                        // разделяем полученную строку на массив
                        inputDateValue = inputDateValue.split( '-');
                        // записываем значения из массива в переменные которые добавим в лейбл
                        let month = inputDateValue[1];
                        let date = inputDateValue[2];
                        formGroupDateLabel.innerHTML = `Date (${month} / ${date})`;

                    isDateValidated  = true;
                } 
                else {
                        isDateValidated  = alertInputFalse(e.target, closestParent, submit);
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
                            let dateValueForCheck = [dateValue.getFullYear()+ '', getMonthValue+'', getDatehValue+''];
                            // преобразовываем массивы дат в строку и сравниваем их если они равны
                            if(inputDateValue.join() == dateValueForCheck.join()){
                                //если введенное время больше текущего времени
                                if(inputTimeValue >= timeValueForCheck) {
                                    isTimeValidated  = alertInputTrue(e.target, closestParent);
                                }else {
                                    console.log(closestParent.querySelector('.alert'));
                                    isTimeValidated  = alertInputFalse(e.target, closestParent, submit);;
                                }
                                // если введенная дата больше текущей
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
            // если все значения перменных true то снимаем disabled с кнопки
            isSubmitDisabledFalse(closestParent);
            

    }

    function isSubmitDisabledFalse(isSubmit) {
        let submitValidate = isSubmit.closest('form').querySelector('input[type="submit"]');
        if(isSubmit.classList.contains('form-group')) {
            if(isEmailValidated  && isPhoneValidated  && isNameValidated    && isSelectValidated && isDateValidated && isTimeValidated) {
                submitValidate.disabled = false;
                submitValidate.classList.remove('disabled-color');
            }else if(!isEmailValidated  || !isPhoneValidated  || !isNameValidated || !isDateValidated || !isTimeValidated || !isSelectValidated){
                submitValidate.disabled = true;
                submitValidate.classList.add('disabled-color');
            }
        } else if(isSubmit.classList.contains('form-group_contact')) {
            if(isPhoneValidatedSecond && isEmailValidatedSecond && isNameValidatedSecond) {
                submitValidate.disabled = false;
                submitValidate.classList.remove('disabled-color');       
            }else if(!isPhoneValidatedSecond  || !isEmailValidatedSecond  || !isNameValidatedSecond ){
                submitValidate.disabled = true;
                submitValidate.classList.add('disabled-color');
            }
        }
    }

    // обрабатываем каждый клик
    submitAll.forEach(element=> {
       element.addEventListener('click', (elem)=> {
        elem.preventDefault();
        //создаем переменную для записи в нее значений инпутов 
        let body = {};
        // находим форму родителя внутри которой был клик и ищем в ней все элементы с указаным классом 
        let allElement = elem.target.closest('form').querySelectorAll('.form-input');
        //делаем проверку для того чтоб понимать длинну списка и правильно записать значения в обьект
        if(allElement.length <= 4){
            body = {
                name: allElement[0].value,
                mail: allElement[1].value,
                phone: allElement[2].value,
                texArea: allElement[3].value,
              }
              submitReqest('POST', urlForm, body, elem.target);
        } else if(allElement.length > 4){
            body = {
                name: allElement[0].value,
                mail: allElement[1].value,
                phone: allElement[2].value,
                people: allElement[3].value,
                date: allElement[4].value,
                time: allElement[5].value,
              }
              //передаем метод, сылку, обьект, и саму кнопку в функцию
              submitReqest('POST', urlForm, body, elem.target);
        }
       })
    })


function submitReqest (method, url, body = null, submitHere) {
    //устанавливаем заголовок для получения текста
    const headers = {
        'Content-Type': 'application/json' 
    }
    //возвращаем метод  fetch
    return fetch(url,{
        method: method,
        //сразу превращаем обьект в строку для удобного получения данных
        body: JSON.stringify(body),
        headers: headers,
    })
    .then(response=> {
        //проверяем полученные данные
        if(response.ok){
            // возвращаем данные в виде обьекто Promise идекодируем данные в формате json
            return response.json(); 
         }
         return response.json().
            catch(error => {
             const e = new Error('Что-то пошло не так');
             e.data = error;
             throw e;
         })
    }).then(res=> {
        console.log(res);
        alert(' Вы успешно зарегистрировались!');
        //после отправки результата обнуляем форму и дизейблим кнопку
        submitHere.disabled = true;
        submitHere.classList.add('disabled-color');
        submitHere.closest("form").reset();
        // проверяем есть ли у нас селект или дата и обнуляем их к прежниму состоянию
        if(submitHere.closest("form").querySelector('input[name="select"]') || submitHere.closest("form").querySelector('input[type="date"]')) {
            formGroupDateLabel.innerText = 'Date (mm/dd)';
            document.querySelector('#select-type').value = "People";
            document.querySelector('.select_checked').innerText = "People";
        }
    })
}
































    //inputDate.addEventListener('blur', (e)=> {
    //    console.log(e.target);
    //});

    