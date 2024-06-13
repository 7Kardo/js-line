
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
// for(var a = 1; a <= 3 ; a++ ){
//     console.log('outer'+a);
//     for( var b = 1; b<=3 ; b++){
//         console.log('inner'+b);
//     }

// }
//  var str = '';
//  for( var i=1 ; i <= 5 ; i++)
// {
//     for(var j=1 ; j <= i; j++){
//         str +='*';
//     }
   
//    str += '\n' ;
  
//  }
// console.log(str);
//  var str = '';
//  for( var i=1 ; i <= 5 ; i++)
// {
//     for(var j=5 ; j >= i; j--){
//         str +='*';
//     }
   
//    str += '\n' ;
  
//  }
// console.log(str);
 var str = '';
 for(var i=1 ; i<=5 ;i++){

    for(var j=5; j>i;j--){
        str +=' ';
    }

    for(var k=1; k<=i;k++){
        str+='*';
    }
    str+='\n';

 }
 console.log(str);