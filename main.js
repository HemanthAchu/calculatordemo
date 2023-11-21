const displayData = (data)=>{
    result.value+=data
}
const calculatorClear =()=>{
    result.value =''
}
const equal=()=>{
    if(result.value!=""){
        try {
            result.value  =  eval(result.value)
        } catch (error) {
            result.value="Error!!!"
        }
    }
  
}