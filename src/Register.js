import axios from "axios";
import swal from 'sweetalert';
import * as toastr from 'toastr';
import 'toastr/build/toastr.css';
import React, { useState } from 'react';



function Register (){
    const getCP = async () =>{
        try {
            let cod=document.getElementById("cp").value;
            let esta=document.getElementById("est");
            let muni=document.getElementById("mun");
            let col=document.getElementById("col");
            console.log("dat");
            if(cod.length===5){
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

                let codps=result.data;
                esta.innerHTML="<option>"+ codps[0].estado + "</option>";
                muni.innerHTML="<option>"+ codps[0].municipio + "</option>";

                for(let i=0;i<codps.length;++i){
                    col.innerHTML += "<option>" + codps[i].colonia + "</option>"
                }

                // return (res.data ? res.data : false);
            
            }else{
                esta.innerHTML="<option>----</option>";
                muni.innerHTML="<option>----</option>";
                col.innerHTML="<option>----</option>";
            }
        }catch (error) {
            console.log(error);
        }      
    }
    return(
        <div className="content">
            <form>
                <div class="row">
                    <div class="col-md-3">
                        <label for="text">CodigoPostal</label>
                        <input type="number" class="form-control" id="cp" placeholder="Codigo Postal" onChange={getCP} />
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
        </div>
    );

}
export default Register;