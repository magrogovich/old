document.getElementById('button').addEventListener('click',function(){
    userName = document.getElementsByClassName("input_name")[0].value;
    lastName = document.getElementsByClassName('input_Last')[0].value
    email = document.getElementsByClassName('email')[0].value
    confEmail = document.getElementsByClassName('confemail')[0].value
    day = document.getElementsByClassName('dd')[0].value
    month = document.getElementsByClassName('mm')[0].value
    year = document.getElementsByClassName('year')[0].value
    verif = true
    test = true
    if ((userName.length == 0 )||( lastName.length == 0) || (email.length == 0) || (confEmail.length == 0) || (day.length == 0) || (month.length == 0) || (year.length == 0)){
        alert('fill all the coordinates')
        test = false
        verif = false
    }
    test2 = true
    if (test == true){
        for (i = 0;i<userName.length ;i++){
            if ((userName[i].toUpperCase()< 'A' || userName[i].toUpperCase()> 'Z')){
                test2 = false
                verif = false
                break
            }
        }
    }

    if(test2 == false){
        alert("user name can contains letter")
    }
    test3 = true
    if (test == true){
        for (i = 0;i<lastName.length ;i++){
            if ((lastName[i].toUpperCase()< 'A' || lastName[i].toUpperCase()> 'Z')){
                test3 = false
                verif = false
                break
            }
        }
    }

    if(test3 == false){
        alert("user lastname can contains letter")
    }

    test4 = true
    if (test == true){
        for (i = 0;i<email.length ;i++){
            if ((email[i].toUpperCase()< 'A' || email[i].toUpperCase()> 'Z') && (email[i]< '0' || email[i]> '9') && (email[i] != '@') && (email[i] != '.')){
                test4 = false
                verif = false
                break
            }
        }
    }

    if(test4 == false){
        alert("email is uncorrect")
    }

    test5 = true
    if (test == true){
        if (confEmail != email){
            test5 = false
            verif = false
        }
    }

    if(test5 == false){
        alert("email do not match")
    }

    

})

