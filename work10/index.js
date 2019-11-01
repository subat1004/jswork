function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
    }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}

var str = 'ABCABC';    
var newStr = '';   
    for (var i = 0; i < str.length; i++) {       
      if (newStr.lastIndexOf(str[i]) == -1) {         
newStr += str[i];        }    }    
    for (var i = 0; i < newStr.length; i++) {      
var count = 0;      
    for (var j = 0; j < str.length; j++) {     
             
      if(newStr[i]==str[j]){                count++;            }        }   
   console.log(newStr[i],count);    }