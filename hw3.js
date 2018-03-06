for (let i = 1; i<=5;i++){
    console.log(i);
};

let k = 1;
while(k<=5){
    console.log(k);
    k++;
};

var j = 1;
do{
    console.log(j);
    j++;
}while(j<=5);

//

for(let h = 5;h>=1;h--){
    console.log(h);
}

function table(n){
    for(let i = 1; i<=9; i++){
        let result = n*i;
        let strResult = n+'*'+i+'='+result;
        console.log(strResult);
    }
};
table(3);

function sum(f){
    if(((f ^ 0) === f) && (f>0)){
        var result = 0;
        for(let i =0;i<=f;i++){
            result += i;
        };
        return result;
    } else{
        alert("Введите целое положительное число!");
        return false;
    }
};
console.log(sum(10));