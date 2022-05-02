import React from 'react';
import GuacheraService from '../api/GuacheraService';

class GuacheraComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            guacheras : []
        }
    }
    

    componentDidMount(){

        GuacheraService.getGuacheras().then((response) => {
            this.setState({ guacheras: response.data})
        });

        


    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Guacheras Listado</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Guachera Id</td>
                            <td> Guachera Fecha alta</td>
                            <td> Guachera fecha baja</td>
                            <td> Guachera fecha capacidad</td>
                            <td> Guachera geolocalizacion </td>
                            <td> Guachera radio_guach </td>
                            <td> Guachera largo_guach </td>
                            <td> Guachera ancho_guach</td>
                            <td> Guachera tipo_guachera;</td>
                            <td> Guachera eliminado</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.guacheras.map(
                                guachera => 
                                <tr key = {guachera.id_guachera}>
                                     <td> {guachera.id_guachera}</td>   
                                     <td> {guachera.fech_alt_guach}</td>  
                                     <td> {guachera.fech_baj_guach}</td>  
                                     <td> {guachera.capacidad}</td>  
                                     <td> {guachera.geolocalizacion}</td>  
                                     <td> {guachera.radio_guach}</td>  
                                     <td> {guachera.largo_Guach}</td>  
                                     <td> {guachera.ancho_guach}</td>
                                     <td> {guachera.tipo_guachera}</td> 
                                     <td> {guachera.eliminado}</td>      
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default GuacheraComponent