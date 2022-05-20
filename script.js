function calculation() {
    var x = document.getElementsByName('x');
    var y = document.getElementsByName('y');
    var z = document.getElementsByName('z');

    var F = (x[0].value-y[0].value)/(2*x[0].value*z[0].value);
    alert(F);
}

function clock() {
    now= new Date();
    date= now.getDate();
    month= now.getMonth()+1;
    year= now.getYear()-100;
     dateStr =  year;
    dateStr += "-" + month;
    dateStr += "-" + date;
    
    document.clock.date.value = dateStr;
    Timer= setTimeout("clock()", 1000);
    }
