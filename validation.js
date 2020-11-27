function checkform(theform) {

    if (document.form.name.value == "") {
        alert("Please enter name");
        document.form.name.focus();
        return false;
    }
    else if ((document.form.name.value.length < 3)) {
        alert("Please enter minimum three character in the name field.");
        document.form.name.focus();
        return false;
    }

    else if (document.form.email.value == "") {
        alert("Please enter your email id");
        document.form.email.focus();
        return false;
    }
    else if (echeck(document.form.email.value) == false) {
        document.form.email.focus();
        return false;
    }
    else if (document.form.mobile.value == "") {
        alert("Please enter mobile number");
        document.form.mobile.focus();
        return false;
    }
    else if ((document.form.mobile.value.length < 10) || (document.form.mobile.value.length > 10)) {
        alert("Please enter 10 digit mobile no.");
        document.form.mobile.focus();
        return false;
    }

    if (document.getElementById("txtCaptcha").value == "") {
        alert("Please enter the security code!");
        document.getElementById("txtCaptcha").focus();
        return false;
    }
    if (document.getElementById("txtCaptcha").value.toLowerCase() != document.getElementById("mainCaptcha").value.toLowerCase()) {
        alert("Sorry that was not the correct security code");
        document.getElementById("txtCaptcha").focus();
        return false;
    }

               

}
function echeck2(str) {
    var digits = "0123456789";
    var temp;
    for (var i = 0; i < document.form.mobile.value.length; i++) {
        temp = document.form.mobile.value.substring(i, i + 1);
        if (digits.indexOf(temp) == -1) {
            alert('Please enter 10 digit mobile no');
            // document.form.mobile.focus();
            //document.getElementById("<%=txtmobile.ClientID%>").focus();
            return false;
        }
    }
    return true;
}

function echeck(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var lstr = str.length;
    var ldot = str.indexOf(dot);
    //alert(str.indexOf(dot));
    //alert(lstr);
    if (str.indexOf(at) == -1) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == (lstr - 1)) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.indexOf(at, (lat + 1)) != -1) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.indexOf(dot, (lat + 2)) == -1) {
        alert("Invalid E-mail ID");
        return false;
    }
    if (str.indexOf(" ") != -1 || str.indexOf("!") != -1 || str.indexOf("?") != -1 || str.indexOf("$") != -1 || str.indexOf("^") != -1 || str.indexOf("*") != -1 || str.indexOf("{") != -1) {
        alert("Invalid E-mail ID");
        return false;
    }
    return true;
}


   