var validateMail = function(mail){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
};

var validateName = function(mail){
    var notNumbers = /^([^0-9]*)$/;
    var notSymbols = /^[^`~!@#$%^&*()<>%$=+_,.[\]:;<>\\/|]*$/;

    return notNumbers.test(String(mail).toLowerCase()) && notSymbols.test(String(mail).toLowerCase());
};

var validation = function(name, value){

    var result = false;

    switch(name){
        case 'Email':
            result = validateMail(value);
            break;
        case 'Name':
            result = validateName(value);
            break;
        case 'Message':
            result = value.length > 10;
            break;
    }

    return result;
};

var validateField = function(field){

    var name = field.name;
    var value = field.value;
    var valid =  validation(name, value);
    var classesArr = ['field--valid', 'field--invalid'];
    var domElem = field.parentElement;

    if(name === 'Message'){
        classesArr = ['field--textarea', 'field--invalid'];
    }

    if(!valid){
        classesArr.reverse();
    }

    domElem.classList.add(classesArr[0]);
    domElem.classList.remove(classesArr[1]);

    return valid;
};

var httpXMLRequest = function(object){

    var btn = document.getElementById('formSubmit');

    btn.innerHTML =
        '<div class="loader" id="loader">'
        + '<span></span>'
        + '<span></span>'
        + '<span></span>'
        + '</div>';

    btn.disabled = true;

    var xhr = new XMLHttpRequest();
    var url = 'https://send-proposal-feedback.graphenelab.io/send.php';
    var data = new FormData();

    for(var i in object){
        data.append(i, object[i]);
    }

    xhr.open('POST', url, true);

    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;

        // по окончании запроса доступны:
        // status, statusText
        // responseText, responseXML (при content-type: text/xml)

        if (this.status != 200) {
            // обработать ошибку
            console.log(this);
            console.log( 'Error: ' + (this.status ? this.statusText : 'request failed!') );
            btn.innerHTML = 'Send';
            btn.disabled = false;
            return;
        } else {
            var formDOM = document.getElementById('contact').getElementsByClassName('container')[0];
            formDOM.innerHTML =
                '<div class="contact__result">'
                    + '<h3 class="contact__result-title">Thank you for getting in touch!</h3>'
                    + '<p class="contact__result-text">'
                        + 'We appreciate you contacting us about the quote. <br/>'
                        + 'One of our colleagues will get back to you shortly.'
                    + '</p>'
                    + '<p class="contact__result-text">Have a great day!!</p>'
                + '</div>';
        }

    }
};

var validateForm = function(e){
    e.preventDefault();

    var targetElements = e.target.elements;
    var formElements = Object.values(targetElements).slice(0, targetElements.length - 1);
    var errors = false;
    var object = {};

    for(var i = 0; i < formElements.length; i++){
        var elem = formElements[i];
        var valide = validateField(elem, true);

        if(!valide){
            errors = true;
            break;
        }

        object[elem.name] = elem.value;
    }

    if(!errors){
        httpXMLRequest(object);
        return;
    }

    console.log('errors!');
};

