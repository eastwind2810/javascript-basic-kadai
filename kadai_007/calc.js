let num;

num = 15;

let three;
let five;

three = num % 3;
five = num % 5;

if (three == 0 && five == 0){
    console.log('3と5の倍数です');
}

else if (three == 0){
    console.log('3の倍数です');
}

else if (five == 0){
    console.log('5の倍数です');
}

else {
    console.log(num);
}