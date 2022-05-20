import React,{useEffect,useState}  from "react";
import axios from "axios";
import swal from 'sweetalert';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';

function Consult (){
    const url='https://apigrupogr.com/grapi/clientes/lista-clientes'
    const[todos,setTodos]=useState()
    const [action,runAction]=useState(0)
    const setAction=()=>{
        runAction(1);
    }
    const getClientes = async () =>{
        const response=await fetch(url)
        const responseJson=await response.json();
        setTodos(responseJson)
    }
    useEffect(()=>{
        getClientes()

    },[setAction])

    return(
        <div className="content">
            <button onClick={getClientes}>CONSULTAR</button><tr></tr>
            { !todos?  'Cargando...':
              todos.map(()=>{
                  return <li>{todos}</li>
              })}
        </div>
    );

}
export default Consult;