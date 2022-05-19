import axios from "axios";
import swal from 'sweetalert';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';
import React, { useState } from 'react';



function Register (){
    const [cod,updcod]=useState( );
    const updateData=()=>{
        try{
            updcod=updateData;
        }catch (error){
            console.log(error);
        }
    }
    const getCP = async () =>{
        try {

            let formData = new FormData();
            formData.append("cp",cod);
            const url = "http://api.masksoftco.mx/direcciones/codigo-postal";

            let result = await axios({
                url,
                method: 'POST',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            if(result.data){
                let objectRes = result.data;
                for(let i=0; i<objectRes.length; i++){
                    console.log(objectRes[i].colonia);
                }
                toastr.success("Información consultada", "correcto")
            }else{
                swal("Opps!", "Código postal incorrecto", "error");
            }


            console.log(result)
            console.log(result.data)
            


           // return (res.data ? res.data : false);
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="content">
            <form>
                <div class="row">
                    <div class="col-md-3">
                        <label for="cd">CodigoPostal</label>
                        <input type="text" class="form-control" id="cd" placeholder="Codigo Postal" onChange={(e)=>updateData(e.target.value)} />
                    </div>
                    <div class="col-md-3" >
                        <label for="est">Estado</label>
                        <select type="text" class="form-control" id="est" placeholder="--Selecione--" disabled>
                        <option>--Seleccione--</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="mun">Municipio</label>
                        <select type="text" class="form-control" id="mun" placeholder="--Selecione--"disabled>
                            <option>--Seleccione--</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="col">Colonia</label>
                        <select type="text" class="form-control" id="col" placeholder="Selecione">
                            <option>--Seleccione--</option>
                        </select>
                    </div>
                </div>
            </form>
            <button onClick={getCP}>Obtener</button>
        </div>
    );

}
export default Register;