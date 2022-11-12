function ktDuLieu() {
    var name = document.getElementById('name').value;
    var cmnd = document.getElementById('cmnd').value;
    var red = document.getElementById('red');
    var red2 = document.getElementById('red2');
    if (name.length <= 0) {
        var s = "*";
        red.innerHTML = s;
        return false;
    }
    if (cmnd.length <= 0) {
        var s2 = "*";
        red2.innerHTML = s2;
        return false;
    }
    else
    {
        return true;
    }
}

function Draw() {
    var n = document.getElementById('n').value;
    var count = 0;
    if (n >= 3 && n <= 7)
    {
        var s = "<table>";
        for (var i = 1; i<=n; i++){
            s = s + "<tr>"
            for (var j = 1; j<=n-i; j++){
                s = s + "<td>" + ("&nbsp;&nbsp;&nbsp;") + "</td>";
            }
            for (var k = 1; k<=2*i-1; k++){
                count++;
                s = s + "<td>" + count +  ("&nbsp;&nbsp;&nbsp;") + "</td>";
            }
            s = s + "</tr>";
        }
        s = s + "</table>";
        var Obj = document.getElementById('VungVe');
        Obj.innerHTML = s;
    }
    else
    {
        alert('Value is not ok!');
    }
}

function change(num) {
    var select = num.value;
    var d = new Date();
    var curYear = d.getFullYear();
    var result = curYear - select;
    var obj = document.getElementById('age');
    obj.innerHTML = result
}

function add() {
    var left = document.getElementById('allTests');
    var right = document.getElementById('selectedTests');
    var option = document.createElement('option');
    option.setAttribute('value', left.value);
    option.appendChild(document.createTextNode(left.value));
    right.appendChild(option);
}

function remove() {
    var left = document.getElementById('allTests');
    var right = document.getElementById('selectedTests');
    var option = document.createElement('option');
    option.setAttribute('value', right.value);
    option.appendChild(document.createTextNode(right.value));
    left.appendChild(option);
}

function listboxMove(listID, direction) {
    var listbox = document.getElementById(listID);
    var selIndex = listbox.selectedIndex;
    if (-1 == selIndex) {
      alert("Please select an option to move.");
      return;
    }
    var increment = -1;
    if (direction == 'up')
      increment = -1;
    else
      increment = 1;
    if ((selIndex + increment) < 0 ||
      (selIndex + increment) > (listbox.options.length - 1)) {
      return;
    }
    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    listbox.options[selIndex].value = listbox.options[selIndex + increment].value
    listbox.options[selIndex].text = listbox.options[selIndex + increment].text
    listbox.options[selIndex + increment].value = selValue;
    listbox.options[selIndex + increment].text = selText;
    listbox.selectedIndex = selIndex + increment;
  }

function tinh() {
    var num = document.getElementById('selectedTests');
    var s = 0;
    for (var i = 0; i < num.length; i++){
        if (num.options[i].value=="Siêu âm bụng dưới (5 phút)"){
            s = s + 5;
        }
        if (num.options[i].value=="X Quang ngực (10 phút)"){
            s = s + 10;
        }
        if (num.options[i].value=="Máu (2 phút)"){
            s = s + 2;
        }
        if (num.options[i].value=="Viêm gan (10 phút)"){
            s = s + 10;
        }
    }
    document.getElementById('minute').innerHTML = s;
}