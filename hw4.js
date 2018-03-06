function day(a){
    if (a>0 && a<=10) {
        console.log('first')
    }
    else if (a>10 && a<=20) {
        console.log('second')
    }
    else if (a>20 && a<=31) {
        console.log('third')
    }
    else {
        console.log('error')
    }
};

function month(a) {
    if (a===12 || a>=1 && a < 3) {
        console.log('зима')
    }
    else if (a>=3 && a<6) {
        console.log('весна')
    }
    else if (a>=6 && a<9) {
        console.log('лето')
    }
    else if (a>=9 && a<12) {
        console.log('осень')
    }
    else {
        console.log('error')
    }
};

function firstSymbol(string) {
    if(string[0]==="a" || string[1]==="a" || string[2]==="a") {
        console.log("yes")
    } else {
        console.log("no")
    }
};

function firstNumb(string) {
    if(string[0]==="1" || string[0]==="2" || string[0]==="3") {
        console.log("yes")
    } else {
        console.log("no")
    }
};

function sumNumb(string) {
    var sum = Number(string[0]) + Number(string[1]) + Number(string[2]);
    return sum;
};

function sumHalfNumb(string) {
    var sumFirst = Number(string[0]) + Number(string[1]) + Number(string[2]);
    var sumSecond = Number(string[3]) + Number(string[4]) + Number(string[5]);
    if(sumFirst === sumSecond){
        console.log('yes')
    } else {
        console.log('no')
    }
};