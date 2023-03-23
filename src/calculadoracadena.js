function calculadoradeCadenas(cadena){
    let numerosseparados = cadena.split(",")
    var sum=0;
    if(cadena == ""){
        return 0;
    }else{
    if(numerosseparados.length==1){
        return parseInt(cadena);
    }else{
        for(var i = 0;i<numerosseparados.length;i++){
            sum += parseInt(numerosseparados[i]);
        }
    }
    } 
    return sum;
    
   
}
export default calculadoradeCadenas;