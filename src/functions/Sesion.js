export function sesion(){
    if(localStorage.length!=0){
        return true
    }else{
        return false
    }
}