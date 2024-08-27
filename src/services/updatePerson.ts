import axios from "axios"
import toast from "react-hot-toast"
import { ErrorHttp } from "../types/person"


export const updatePerson = async (id: string, name: string, email:string) => {
    try{
        const data = {
            name: name,
            email: email
        }
       await axios.put(`http://localhost:3000/persons/update/${id}`, data).then((response) => {

        window.location.href = '/';

       })
    }catch(error){
        const errorHttp = error as ErrorHttp
       if(errorHttp.status == 400){
        toast.error('Já existe alguém com este e-mail');
       }
       
    }
}