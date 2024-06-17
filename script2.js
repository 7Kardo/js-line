
// var counter = 0, num = 0;
// for(var i = 1;i<= num; i++){
//     if(num%i == 0)
//         counter++;
// }

//  
// if(counter==2)
//     console.log('val');
// else{
//     console.log('morakab');
// }

//  *****************************
// for(var a = 1; a <= 3 ; a++ ){
//     console.log('outer'+a);
//     for( var b = 1; b<=3 ; b++){
//         console.log('inner'+b);
//     }

// }

//  ***********************************

//    Asterakan
//  var str = '';
//  for( var i=1 ; i <= 5 ; i++)
// {
//     for(var j=1 ; j <= i; j++){
//         str +='*';
//     }
//    str += '\n' ;
//  }
// console.log(str);


//************************************** 
//  var str = '';
//  for( var i=1 ; i <= 5 ; i++)
// {
//     for(var j=5 ; j >= i; j--){
//         str +='*';
//     }
   
//    str += '\n' ;
  
//  }
// console.log(str);


//***************************************
//  var str = '';
//  for(var i=1 ; i<=5 ;i++){

//     for(var j=1; j<i;j++){
//         str +=' ';
//     }

//     for(var k=5; k>=i;k--){
//         str+='*';
//     }
//     str+='\n';

//  }
//  console.log(str);

//  ***************************************
// var gre =[14,23,56,12.4,89,99];
// var sum = 0;
// for(var i=0; i<gre.length; i++){
//    sum += gre[i];
// }
// var average = sum/gre.length
// console.log(average)

//  ****************************************
// function addnumber(num1,num2,num3,num4){
//    console.log((num1*num2)+num3+num4);
// }
// addnumber(5,5,3,3)

//  ************************************

function average(num1,num2,num3,num4,num5){
   var total = num1 + num2 + num3 + num4 + num5;
   var av = total /5;
   if(av >=12){
      console.log('hast du bestanden');
   }else{
      console.log('nicht geschafft');
   }
}
average(1,8,12,15,6);
average(10,15,19,17,10);




