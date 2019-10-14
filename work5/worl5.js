src = '<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</tb>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML=str  