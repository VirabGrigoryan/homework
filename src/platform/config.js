import axios from "axios";



axios.interceptors.response.use(function (response) {
   
    console.log(response,'aaaaa')
    if(response.status===200){

    }
    return response;
}, (rejected)=>{
    if(rejected.response.status===404){
        console.log(rejected.message)
        alert(rejected.message)
    }
});