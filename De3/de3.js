function change2(num){
    var day = document.getElementById('Field0-1').value;
    var month = document.getElementById('Field0-2').value;
    var year = document.getElementById('Field0').value;
    var daysInMonth = new Date(year, month, 0).getDate();

    switch(num)
    {
        case 1:
            if (day <= 0 || month <= 0 || year <= 0)
            {
                alert('Vui lòng nhập lại!');
                break;
            }
            else
            {
                if(day == daysInMonth)
                {
                    if(month == 12)
                    {
                        day = 1;
                        month = 1;
                        year++;
                    }
                    else
                    {
                        day = 1;
                        month++;
                    }
                }
                else
                {
                    day++;
                }    
                if(day < 10)
                {
                    day = "0" + day;
                }
                if(month < 10)
                {
                    month = "0" + month;
                }
                document.getElementById('Field3-1').value = day;
                document.getElementById('Field3-2').value = month;
                document.getElementById('Field3').value = year;
                break;
            }
        case 2:
           var day2 = parseInt(day);
            
            if (day <= 0 || month <= 0 || year <= 0)
            {
                alert('Vui lòng nhập lại!');
                break;
            }
           else
            {
                if (day2 >= 25)
                {
                    if (daysInMonth == 28)
                    {
                        if (day2 == 25)
                        {
                            day2 = 4;
                        }
                        else if (day2 == 26)
                        {
                            day2 = 5;
                        }
                        else if (day2 == 27)
                        {
                            day2 = 6;
                        }
                        else if (day2 == 28)
                        {
                            day2 = 7;
                        }
                    }
                    else if (daysInMonth == 29)
                    {
                        if (day2 == 25)
                        {
                            day2 = 3;
                        }
                        else if (day2 == 26)
                        {
                            day2 = 4;
                        }
                        else if (day2 == 27)
                        {
                            day2 = 5;
                        }
                        else if (day2 == 28)
                        {
                            day2 = 6;
                        }
                        else if (day2 == 29)
                        {
                            day2 = 7;
                        }
                    }
                    else if (daysInMonth == 30)
                    {
                        if (day2 == 25)
                        {
                            day2 = 2;
                        }
                        else if (day2 == 26)
                        {
                            day2 = 3;
                        }
                        if (day2 == 27)
                        {
                            day2 = 4;
                        }
                        else if (day2 == 28)
                        {
                            day2 = 5;
                        }
                        else if (day2 == 29)
                        {
                            day2 = 6;
                        }
                        else if (day2 == 30)
                        {
                            day2 = 7;
                        }
                    }
                    else if (daysInMonth == 31)
                    {
                        if (day2 == 25)
                        {
                            day2 = 1;
                        }
                        else if (day2 == 26)
                        {
                            day2 = 2;
                        }
                        else if (day2 == 27)
                        {
                            day2 = 3;
                        }
                        else if (day2 == 28)
                        {
                            day2 = 4;
                        }
                        else if (day2 == 29)
                        {
                            day2 = 5;
                        }
                        else if (day2 == 30)
                        {
                            day2 = 6;
                        }
                        else if (day2 == 31)
                        {
                            day2 = 7;
                        }
                    }
                    month++;
                }
                else if(day == daysInMonth)
                {
                    if(month == 12)
                    {
                        day2 += 7;
                        month = 1;
                        year++;
                    }
                    else
                    {
                        day2 += 7;
                        month++;
                    }
                }
                else
                {
                    day2 += 7;
                }         
                document.getElementById('Field3-1').value = day2;
                document.getElementById('Field3-2').value = month;
                document.getElementById('Field3').value = year;
                break;
            }
            case 3:
                if (day <= 0 || month <= 0 || year <= 0)
                {
                    alert('Vui lòng nhập lại!');
                    break;
                }
                else
                {
                    if (month < 12){
                        month++;
                    }
                    if (month == 12){
                        month = 1;
                    }
                }
                document.getElementById('Field3-1').value = day;
                document.getElementById('Field3-2').value = month;
                document.getElementById('Field3').value = year;
            }
            if (day > 0 && month > 0 && year > 0)
            {
                var kind  = document.getElementById('Field14');
                kind.disabled = false;
            }
    }

    function change3(num){
        var day = document.getElementById('Field0-1').value;
        var month = document.getElementById('Field0-2').value;
        var year = document.getElementById('Field0').value;
        var daysInMonth = new Date(year, month, 0).getDate();
    
        switch(num)
        {
            case 1:
                    if(day == daysInMonth)
                    {
                        if(month == 12)
                        {
                            day = 1;
                            month = 1;
                            year++;
                        }
                        else
                        {
                            day = 1;
                            month++;
                        }
                    }
                    else
                    {
                        day++;
                    }    
                    if(day < 10)
                    {
                        day = "0" + day;
                    }
                    if(month < 10)
                    {
                        month = "0" + month;
                    }
                    document.getElementById('Field3-1').value = day;
                    document.getElementById('Field3-2').value = month;
                    document.getElementById('Field3').value = year;
                    break;
                
            case 2:
               var day2 = parseInt(day);
                
                    if (day2 >= 25)
                    {
                        if (daysInMonth == 28)
                        {
                            if (day2 == 25)
                            {
                                day2 = 4;
                            }
                            else if (day2 == 26)
                            {
                                day2 = 5;
                            }
                            else if (day2 == 27)
                            {
                                day2 = 6;
                            }
                            else if (day2 == 28)
                            {
                                day2 = 7;
                            }
                        }
                        else if (daysInMonth == 29)
                        {
                            if (day2 == 25)
                            {
                                day2 = 3;
                            }
                            else if (day2 == 26)
                            {
                                day2 = 4;
                            }
                            else if (day2 == 27)
                            {
                                day2 = 5;
                            }
                            else if (day2 == 28)
                            {
                                day2 = 6;
                            }
                            else if (day2 == 29)
                            {
                                day2 = 7;
                            }
                        }
                        else if (daysInMonth == 30)
                        {
                            if (day2 == 25)
                            {
                                day2 = 2;
                            }
                            else if (day2 == 26)
                            {
                                day2 = 3;
                            }
                            if (day2 == 27)
                            {
                                day2 = 4;
                            }
                            else if (day2 == 28)
                            {
                                day2 = 5;
                            }
                            else if (day2 == 29)
                            {
                                day2 = 6;
                            }
                            else if (day2 == 30)
                            {
                                day2 = 7;
                            }
                        }
                        else if (daysInMonth == 31)
                        {
                            if (day2 == 25)
                            {
                                day2 = 1;
                            }
                            else if (day2 == 26)
                            {
                                day2 = 2;
                            }
                            else if (day2 == 27)
                            {
                                day2 = 3;
                            }
                            else if (day2 == 28)
                            {
                                day2 = 4;
                            }
                            else if (day2 == 29)
                            {
                                day2 = 5;
                            }
                            else if (day2 == 30)
                            {
                                day2 = 6;
                            }
                            else if (day2 == 31)
                            {
                                day2 = 7;
                            }
                        }
                        month++;
                    }
                    else if(day == daysInMonth)
                    {
                        if(month == 12)
                        {
                            day2 += 7;
                            month = 1;
                            year++;
                        }
                        else
                        {
                            day2 += 7;
                            month++;
                        }
                    }
                    else
                    {
                        day2 += 7;
                    }         
                    document.getElementById('Field3-1').value = day2;
                    document.getElementById('Field3-2').value = month;
                    document.getElementById('Field3').value = year;
                    break;
                
                case 3:
              
                        if (month < 12){
                            month++;
                        }
                        if (month == 12){
                            month = 1;
                        }
                    
                    document.getElementById('Field3-1').value = day;
                    document.getElementById('Field3-2').value = month;
                    document.getElementById('Field3').value = year;
                }
                if (day > 0 && month > 0 && year > 0)
                {
                    var kind  = document.getElementById('Field14');
                    kind.disabled = false;
                }
        }

function onload2() {
    var kind  = document.getElementById('Field14');
    kind.disabled = true;
 
}

function checked() {
    var breakfast = document.getElementById('Field181').checked;
    var wash = document.getElementById('Field182').checked;
    var paper = document.getElementById('Field183').checked;
    if (breakfast || wash || paper)
    {
        return true;
    }
    else
    {
        alert('Choose atleast one checkbox!');
        return false;
    }
}

function tinh() {
    var price = document.getElementById('Field14').value;
    var room = document.getElementById('Field8').value;
    var day = document.getElementById('Field7').value;

    var breakfast = document.getElementById('Field181').checked;
    var wash = document.getElementById('Field182').checked;
    var paper = document.getElementById('Field183').checked;

    var s = 0;
    var service = 0;
    var result = 0;
    var count = 0;

    if (price == "Planning"){
        s += 150;
    }
    if (price == "In Progress"){
        s += 300;
    }
    if (price == "Finished"){
        s += 500;
    }

    if (room == "Phòng đơn")
    {
        s = s + (s*100/100);
    }
    
    if (room == "Phòng đôi")
    {
        s = s +(s*(180/100).toFixed(2))
    }
    
    if (room == "Phòng tập thể")
    {
        s = s +(s*(300/100).toFixed(2))
    }

    if (day == "1d")
    {
        s = s;
    }
    if (day == "1w")
    {
        s *= 7;
    }
    if (day == "1m")
    {
        s *= 30;
    }

    if (price == "Planning"){
        if (breakfast){
            count++; 
        }
        if (wash){
            count++; 
        }
        if (paper){
            count++; 
        }
        service = s + s*(count*((5/100).toFixed(2)));
    }
    if (price == "In Progress"){
        if (wash){
            count++; 
        }
        if (paper){
            count++; 
        }
        service = s + s*(count*((5/100).toFixed(2)));
    }
    if (price == "Finished"){
        if (wash){
            count++; 
        }
        if (paper){
            count++; 
        }
        service = s + s*(count*((5/100).toFixed(2)));
    }
    result = s + service;
    document.getElementById('Field2').value = result.toFixed(3) + " VNĐ";
}

