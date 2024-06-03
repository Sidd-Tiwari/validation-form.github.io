function validateForm() {
    var name = document.getElementById('name').value ;
    var dob = document.getElementById('dob').value ;
    var contact = document.getElementById('contact').value ;

    var nameValue = name.value;
    var regexName = /^[A-Z][a-z\s]+$/;

    var phoneValue = contact.value;
    var regexPhone = /^[1-9][0-9]+$/;

    if(name === "" || dob ==="" || contact ===""){
        alert("Undefined");
        return false;
    }

    else if(name.length < 4){
        alert("Please enter name with at least 4 letters");
        return false;
    }

    else if  (!(/^\S{3,}$/.test(name))) {
        alert('Name cannot contain whitespace');
        return false;
    }

    else if(!regexName.test(name)){
        alert("Name 1st letter should be capital and not contain numbers or special character.");
        return false;
    }

    else if(!(/^(?:(\w)(?!\1\1))+$/.test(name))){
        alert("Per 3 alphabets allowed");
    }

    else if(contact.length < 10){
        alert("Enter 10 digit number");
        return false;
    }

    else if(!regexPhone.test(contact)){
        alert("Phone number should contain only valid number");
        return false;
    }

    else{
        alert("Form submitted ! \nName is: "+name+",\nDOB is: "+dob+",\nPhone no.:"+contact);
        return true;
    }

}
//---------------Disable Right Click------------------------
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

//---------------Text Selection and Copy Disabled-------------------------
document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('selectstart', (e) => e.preventDefault());
    document.body.addEventListener('copy', (e) => e.preventDefault());
    document.body.addEventListener('cut', (e) => e.preventDefault());
    document.body.addEventListener('paste', (e) => e.preventDefault());
});