var validateMail = function(mail){
    var re = /^[\w-_\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;
    return re.test(String(mail).toLowerCase());
};

var validateField = function(field){

    var value = field.value;
    var valid =  validateMail(value);
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

var httpXMLRequest = function(obj){

    var btn = document.getElementById('formSubmit');

    btn.innerHTML =
        '<div class="loader" id="loader">'
        + '<span></span>'
        + '<span></span>'
        + '<span></span>'
        + '</div>';

    btn.disabled = true;

    var objToSend = {
        SendName: 'PokerChained Test',
        body: 'I want to try PokerChained Test. Here is my Email: ' + obj.email
    };

    var xhr = new XMLHttpRequest();
    var url = 'https://feedback.blckchnd.com/smm';

    xhr.open('POST', url, true);

    xhr.send(JSON.stringify(objToSend));

    xhr.onreadystatechange = function() {

        if (this.readyState != 4) return;

        var result = JSON.parse(this.response).data.status;

        // по окончании запроса доступны:
        // status, statusText
        // responseText, responseXML (при content-type: text/xml)

        if (result != 'OK') {
            // обработать ошибку
            console.log(this);
            console.log( 'Error: ' + (this.status ? this.statusText : 'request failed!') );
            btn.innerHTML = 'Submit';
            btn.disabled = false;
            return;
        }

        document.getElementById('formWrapper').innerHTML =
            '<p>Thank you for message. When beta-test of our product begins, we\'ll message you.</p>';
    }
};

var mailResponse = async (name, email, phone, message) => {
    let bodyMessage = email + ', ' + phone + '\n' + '\n' + message;
    return await axios.post('https://feedback.blckchnd.com/smm', {
        SendName: name,
        body: bodyMessage
    })
        .then(() => true)
        .catch(() => false);
};

var validateForm = function(e){
    e.preventDefault();

    var targetElements = e.target.elements;
    var formElements = Object.values(targetElements).slice(0, targetElements.length - 1);
    var errors = false;
    var object = {};

    console.log(formElements);

    for(var i = 0; i < formElements.length; i++){
        var elem = formElements[i];
        var valide = validateField(elem);

        console.log(valide);

        if(!valide){
            errors = true;
            break;
        }

        object[elem.name] = elem.value;

        console.log(object);
    }

    if(!errors){
        httpXMLRequest(object);
        return;
    }

    console.log('errors!');
};

