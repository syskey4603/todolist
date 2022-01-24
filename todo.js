function todoclicked(nameofcheckbox) {
    if (document.getElementById(nameofcheckbox + 'checkbox').checked == true) {
        var finnisheddiv = document.getElementById("finished");
        finnisheddiv.appendChild(document.getElementById(nameofcheckbox + 'div'));

    } else {
        var notcheckeddiv = document.getElementById("notchecked");
        notcheckeddiv.appendChild(document.getElementById(nameofcheckbox + 'div'));
    }
}

function addtodo() {
    var usersinput = document.getElementById("inputtodo");
    if (usersinput.value == "") {
        return;
    }
    var notcheckeddiv = document.getElementById('notchecked');
    var newdiv = document.createElement("div");
    newdiv.id = usersinput.value + "div";
    var newcheckbox = document.createElement("input");
    newcheckbox.setAttribute("type", "checkbox");
    newcheckbox.id = usersinput.value + "checkbox";
    newcheckbox.onclick = (function() {
        var temp = usersinput.value;
        return function() { todoclicked(temp + ""); }

    })();

    var label = document.createElement('label');
    label.id = usersinput.value + "label";
    label.appendChild(document.createTextNode(usersinput.value));
    newdiv.appendChild(newcheckbox);
    newdiv.appendChild(label);
    newdiv.appendChild(document.createElement("br"));
    notcheckeddiv.appendChild(newdiv);
    usersinput.value = "";

}