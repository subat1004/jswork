// var a = parseInt(prompt("请输入偶数："));
// function goldbach(num){
//     var sum = 0;
//     for(var d=1;d<=num;d++){
//         if (num % d==0){
//             sum++;
//         }
//     }
//     if (sum==2){
//         return true;
//     }else{
//         return false;
//     }
// }
// for(var b=2;b<a;b++){
//     var c=a-b;
//     if(goldbach(b) && goldbach(c) &&b<=c){
//      document.write(a+"可以拆分为质数"+b+"与"+c+'<br>');
//     }
// } 
// let odd = document.getElementById('odd').value
//     odd = parseInt(odd);
//         function pi(num){
//     var sum = 0;
//     for(var d=1;d<=num;d++){
//         if (num % d==0){
//             sum++;
//         }
//     }
//     if (sum==2){
//         return true;
//     }else{
//         return false;
//     }
// }
// function goldbach(odd){
//      odd = document.getElementById("odd").value
// odd = parseInt(odd);
// for(var b=2;b<odd;b++){
//     var c=odd-b;
//     if(pi(b) && pi(c) &&b<=c){
//      document.write(odd+"可以拆分为质数"+b+"与"+c+'<br>');
//     }
// }
// }
// for(var b=2;b<odd;b++){
//     var c=odd-b;
//     if(pi(b) && pi(c) &&b<=c){
//      document.write(odd+"可以拆分为质数"+b+"与"+c+'<br>');
//     }
// }
        function pi(num){                                                         
    var sum = 0;                                                                  
    for(var d=1;d<=num;d++){                                                                          //可以打代码~不要复制粘贴哦~07190612gyf                                                
        if (num % d==0){
            sum++;
        }
    }
    if (sum==2){
        return true;
    }else{
        return false;
    }
}
function goldbach(odd){
     odd = document.getElementById("odd").value
odd = parseInt(odd);
let str=''
for(var b=2;b<odd;b++){
    var c=odd-b;
    if(pi(b) && pi(c) &&b<=c){
      //  document.write(odd+"可以拆分为质数"+b+"与"+c+'<br>');

     str += (odd+"可以拆分为两个质数"+ b+"与"+c+"的和"+'<br>');
    }
}
document.getElementById("goldbach").innerHTML = str;
}





