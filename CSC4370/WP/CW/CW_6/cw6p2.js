// for input retrival
function $(id) {
    return document.getElementById(id);
}

//validate form
function validateInputs() {
    //id
    var id = $("txtID").value;

    // first name
    var firstName = $("txtFirstName").value;

    // lastname
    var lastName = $("txtLastName").value;

    // check input if id has no input
    if (id == "") {
        alert("Listen here you dolt, you must type something for an id")

        $("idError").innerHTML = "ಠ╭╮ಠ";
        $("idError").style.color = "red";

    }
    //check if first name has no input 
    else if (firstName == "") {
        alert("Are you a muggle, i've already told you to type something for first name ");
        $("firstNameError").innerHTML = "( ˘︹˘ ))"
        $("firstNameError").style.color = "red";

    }
    //check if last name has no input 
    else if (lastName == "") {
        alert("Are you really worse than a dolt. I said type somethings for your last name ");
        $("lastNameError").innerHTML = "╰（‵□′）╯"
        $("lastNameError").style.color = "red";

    }
    //if all forms valid
    else {
        $("idError").innerHTML = "ಠ╭╮ಠ";
        $("firstNameError").innerHTML = "( ˘︹˘ ))";
        $("lastNameError").innerHTML = "╰（‵□′）╯";
        $("details").innerHTML = " <br/>Id : " + id + "<br/>First Name : " + firstName + "<br/>Last Name :" + lastName + "<br/>";

        $("txtID").value = "";
        $("idError").innerHTML = "";

        $("txtFirstName").value = "";
        $("firstNameError").innerHTML = "";
         
        $("txtLastName").value = "";
        $("lastNameError").innerHTML = "";

    }

}

