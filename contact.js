function verifyName(form){
    var msg;
    var val=form.Name.value;
    if(val==""){
        msg="please enter your name";
        alert(msg);
        form.name.focus();
    }
}

function verifyPhone(form){
    var msg;
    var val=form.phone.value;
    if(val=="||val.length,10"){
        msg="please enter your phone number";
        alert(msg);
        form.phone.focus();
    }
     if(isNaN(val)){
        msg="ypur phone no should be numeric only";
        alert(msg);
        form.phone.focus();
     }
}

function verifyEmail(form){
    var msg;
    var val=form.email.value;
    if(val==""){
        msg="please enter your email";
        alert(msg);
        form.email.focus();
    }
}

function verifySubject(form){
    var msg;
    var val=form.Subject.value;
    if(val==""){
        msg="please enter the subjectt you have query about";
        alert(msg);
        form.Subject.focus();
    }
}

