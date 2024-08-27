import axios from "axios"
import toast from "react-hot-toast"
import { ErrorHttp } from "../types/person"

export const deletePerson = async (id: string) => {
try{
    await axios.delete(`http://localhost:3000/persons/delete/${id}`).then((response) => {
        toast.success(response.data)
    })
}catch(error){
    const errorHttp = error as ErrorHttp
       if(errorHttp.status == 400){
        toast.error('Este usuário não existe');
       }
}
}