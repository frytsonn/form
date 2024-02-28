let submitButton = document.querySelector('#submit')
let resetButton = document.querySelector('#reset')
let form = document.querySelector('form')

let changeColor = (result, object) => {
    if(result){
        object.style.border = '4px solid #39AD48'
    }else{
        object.style.border = '4px solid #FF0000'
    }
}

let checkOnlyLetter = (word) => {
    let regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/
    changeColor(regex.test(word.value), word)
}
let checkEmail = (email) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    changeColor(regex.test(email.value), email)
}
let checkNumberHouse = (numberHouse) => {
    let regex = /^[1-9][0-9]{0,2}$/
    changeColor(regex.test(numberHouse.value), numberHouse)
}
let checkBirth = (birth) => {
    let regex = /^(19\d{2}|200\d|201[0-9])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    changeColor(regex.test(birth.value), birth)
}
let checkPhoneNumber = (phone) => {
    let regex = /^\d{9}$/;
    changeColor(regex.test(phone.value), phone)
}
let checkCheckBox = (checkBox) => {
    changeColor(checkBox.checked, checkBox)
}



let allInputs = document.querySelectorAll('.info input')
let birth = document.querySelector('#birth')
birth.addEventListener('change', () => {
    if(birth.value != ''){
        birth.style.color = 'rgb(21, 21, 21)'
    }else{
        birth.style.color = '#757575'
    }
})
resetButton.addEventListener('click', () => {
    birth.style.color = '#757575'
    allInputs.forEach(input => {
        input.style.border = '4px solid black'
    })
})






let checkForm = () => {
    let name = document.querySelector('#name')
    let surname = document.querySelector('#surname')
    let email = document.querySelector('#email')
    let country = document.querySelector('#country')
    let city = document.querySelector('#city')
    let street = document.querySelector('#street')
    let houseNumber = document.querySelector('#house-number')
    let birth = document.querySelector('#birth')
    let telephoneNumber = document.querySelector('#telephone-number')
    let checkBox = document.querySelector('#checkbox')
    
    let lettersWords = [name, surname, country, city, street]

    lettersWords.forEach(word => {
        checkOnlyLetter(word)
    })
    checkEmail(email)
    checkNumberHouse(houseNumber)
    checkBirth(birth)
    checkPhoneNumber(telephoneNumber)
    checkCheckBox(checkBox)
    console.log(birth.value);
}

form.addEventListener('submit', e => {
    e.preventDefault()
})
submitButton.addEventListener('click', e => {
    checkForm()  
})