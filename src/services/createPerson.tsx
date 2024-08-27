import axios from "axios"
import toast from "react-hot-toast"
import { ErrorHttp } from "../types/person"


export const createPerson = async (name: string, email:string) => {
    try{
        const data = {
            name: name,
            email: email
        }
       await axios.post(`http://localhost:3000/persons/create`, data).then((response) => {

       toast.success('Usuário criado com sucesso!')
        setTimeout(() => {
            window.location.href = '/';
        }, 1000)

       })
    }catch(error){
        const errorHttp = error as ErrorHttp
       if(errorHttp.status == 400){
        toast.error('Já existe alguém com este e-mail');
       }
       
    }
}