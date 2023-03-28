function calculadoradeCadenas(cadena){
    var separadores = /[,-]/;
    let numerosseparados = cadena.split(separadores)
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