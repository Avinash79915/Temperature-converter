const calc =() => {
const numberTemp=document.getElementById('temp').value;
console.log(numberTemp);

const tempSelect= document.getElementById('temp_diff').value;
//const valueTemp=temp_diff.options[tempSelect.selectIndex].value;
//console.log(tempSelect.value);
let tempValue=tempSelect;
console.log(tempValue);

const celtofar=(celo) =>{
    let faren = Math.round((celo*9/5)+32);
    return faren;
}

const fartocel=(fare) =>{
    let celsious = Math.round((fare-32)*5/9);
    return celsious;
}



let result;

if(tempValue==="cel"){
        result=celtofar(numberTemp);
        document.getElementById('result').innerHTML=`${result}°Fahrenheit`;
   
}else{

    result=fartocel(numberTemp);
    document.getElementById('result').innerHTML=`${result}°Celsius`;
}

} 