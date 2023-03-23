function calculadoradeCadenas(cadena){
    let numerosseparados = cadena.split(",")
    if(cadena == ""){
        return 0;
    }else{
    if(numerosseparados.length==1){
        return parseInt(cadena);
    }else{
        let num1 = parseInt(numerosseparados[0])
        let num2 = parseInt(numerosseparados[1])
        var sum = num1 + num2
    }
    } 
    return sum;
    
   
}
export default calculadoradeCadenas;