
// var counter = 0, num = 0;
// for(var i = 1;i<= num; i++){
//     if(num%i == 0)
//         counter++;
// }
// if(counter==2)
//     console.log('val');
// else{
//     console.log('morakab');
// }
for(var a = 1; a <= 2 ; a++ ){
    console.log('outer'+a);
    for( var b = 1; b<=3 ; b++){
        console.log('inner'+b);
    }

}
