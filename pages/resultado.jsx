import React, { useEffect, useState } from 'react';
import Head from "next/head";
import mujerSAC from "../public/assets/svg/mujersac.svg"
import chanchitoCorazon from "../public/assets/svg/chanchitoCorazon.svg"
import manito from "../public/assets/svg/manitoLike.svg"

import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../store/actions/postAction";
import { Card, Col, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import MaskedInput from "react-text-mask";
import { dineroMask } from "../utils/inputMask"
import { cleanDigitos } from '../utils/cleanInputMask';
import {aacento, eacento, iacento, oacento, uacento, interrogacion} from '../utils/caracteresUTF8'

export default function Resultado(props) {

    const headers = {
        "Content-Type": "application/json"
    };

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const [regimenData, setRegimenData] = useState({});
    const [ahorroComision, setAhorroComision] = useState('');
    const [apvAhorroApvAnual, setApvAhorroApvAnual] = useState('');
    const [apvBonificacionFiscal, setApvBonificacionFiscal] = useState('');
    const [apvTotalApv, setApvTotalApv] = useState('');
    const [diferenciaDeRentabilidad, setDiferenciaDeRentabilidad] = useState('');
    const [rentabilidadAfpActual, setRentabilidadAfpActual] = useState('');
    const [rentabilidadAfpModelo, setRentabilidadAfpModelo] = useState('');


    useEffect(() => {
        
        setRentabilidadAfpActual(localStorage.getItem('rentabilidadAfpActual'));
        setRentabilidadAfpModelo(localStorage.getItem('rentabilidadAfpModelo'));
        setDiferenciaDeRentabilidad(localStorage.getItem('diferenciaDeRentabilidad'));
        setAhorroComision(localStorage.getItem('ahorroComision'));
        setApvAhorroApvAnual(localStorage.getItem('apvAhorroApvAnual'));
        setApvBonificacionFiscal(localStorage.getItem('apvBonificacionFiscal'));
        setApvTotalApv(localStorage.getItem('apvTotalApv'));
    }, []);

    const handleSubmit = values => {
        setIsLoading(true);

        /*
        const nombre = regimenData.nombre !== undefined && regimenData.nombre;
        const rutPrimero = regimenData.rut !== undefined && regimenData.rut;
        const rutDv = regimenData.rutDv !== undefined && regimenData.rutDv;
        const rut = rutPrimero + "-" + rutDv;
        const correo = regimenData.correo !== undefined && regimenData.correo;
        const celular = regimenData.celular !== undefined && regimenData.celular;
        const sueldo = regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta;

        const body = {
            nombre: nombre,
            rut: rut,
            correo: correo,
            celular: celular,
            sueldo: sueldo,
            ahorro: cleanDigitos(values.ahorro)
        };

        axios
            .post(props.urlIngresarSimulacion, body, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data.idSimulacion) {
                    setRegimenData(data);
                }

                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
        */
    };

    const texto_regimen = `En  base a tu renta mensual y el monto del aporte quieres realizar el 15% de bonificaci${oacento}n por parte del Estado es el que m${aacento}s te conviene.`

    const body_eventos = {
        "sessionId": "string",
        "eventoId": 0,
        "result0": 0,
        "result1": 0,
        "result2": 0,
        "rut": props.rut
    }

    function contactarme() {

        window.location.href = "/solicitud";

        /*
        body_eventos.EventoId = 8;
        axios
            .post(props.urlIngresarEvento, body_eventos, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    window.location.href = "/solicitud";
                }
            })
            .catch(e => {
                console.log(e);
            });
        */
    }

    function conocer_apv() {

        window.location.href = "http://apvmodelo.azurewebsites.net/";

    }

    function apertura_afiliado() {

        window.location.href = "https://www.afpmodelo.cl/Portal-Afiliado/Operaciones/Ahorro-Previsional-Voluntario/Mi-APV/Abrir-un-APV-Paso1.aspx?acceder&utm_source=QueAPVConviene&utm_medium=referal&utm_campaign=QueAPVConviene&utm_content=BotonAccion";

        /*
        body_eventos.EventoId = 10;

        axios
            .post(props.urlIngresarEvento, body_eventos, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    window.location.href = "https://www.afpmodelo.cl/Portal-Afiliado/Operaciones/Ahorro-Previsional-Voluntario/Mi-APV/Abrir-un-APV-Paso1.aspx?acceder&utm_source=QueAPVConviene&utm_medium=referal&utm_campaign=QueAPVConviene&utm_content=BotonAccion";
                }
            })
            .catch(e => {
                console.log(e);
            });
            */
    }

    const dudas_texto =
        `Nuestros ejecutivos pueden asesorarte en l${iacento}nea o v${iacento}a tel${eacento}fonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.`;

    return (
        <>
            <Head>
            <title>Que AFP te Conviene | Simula cuanto hubieses ahorrado en AFP Modelo | AFP Modelo</title>
                <meta name="description" content={`Aumenta tus ahorros, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de ahorro al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <section>
                <div className="resultado">
                    <div className="row first">
                        <div className="col-md-12 d-flex header offset-md-1">
                            <div className="col-md-6 col-sm-10 d-flex justify-content-end flex-column p-0">
                                <div>
                                    <h2>Tus ahorros crecen con Afp Modelo</h2>
                                    <p>La combinanción de la rentabilidad que obtienes con AFP Modelo menos la comisión que pagarías da como resultado un mayor ahorro para ti.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mx-3 desktop">
                                <img src={chanchitoCorazon} alt="corazon"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ctn col-md-5 offset-md-1 d-flex flex-column">
                            <h3>El ahorro en tu fondo obligatario aumenta</h3>
                            <span>La rentabilidad obtenida en tu actual Afp versus la que podrías
haber obtenido durante el mismo período de tiempo en AFP Modelo es mayor. Te invitamos a ver tu resultado.</span>
                            <br/>
                            <Card>
                                <Card.Body>
                                        <Table responsive
                                               className="table-borderless"
                                        >
                                            <thead>
                                            <tr>
                                                <th>Este es el resultado de tu comparación:</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Rentabilidad AFP Actual:</td>
                                                <td className="text-right">{rentabilidadAfpActual === null ? '$1.000' : '$'+parseInt(rentabilidadAfpActual)+parseInt(1000)}</td>
                                            </tr>
                                            <tr>
                                                <td>Rentabilidad AFP Modelo:</td>
                                                <td className="text-right">{rentabilidadAfpModelo === null ? '$800' : '$'+parseInt(rentabilidadAfpModelo)+parseInt(800)}</td>
                                            </tr>
                                            <tr>
                                                <td className="green-tabla">Diferencia de rentabilidad:</td>
                                                <td className="text-right green-tabla">{diferenciaDeRentabilidad === null ? '$200' : '$'+parseInt(diferenciaDeRentabilidad)+parseInt(200)}</td>
                                            </tr>
                                            <tr>
                                                <td>Ahorro en comisi{oacento}n</td>
                                                <td className="text-right">{ahorroComision === null ? '$200' : '$'+parseInt(ahorroComision)+parseInt(200)}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="ctn col-md-5 d-flex flex-column">
                            <h3>Cómo hacer crecer tu pensión</h3>
                            <span>Tu ahorro en comisión puede hacer la diferencia, en Modelo solo pagas un 0,77%. Si hubieras invertido este monto en un APV hoy en día tendrías el siguiente monto:</span>
                            <br/>
                            <Card>
                                <Card.Body>
                                    <Table responsive
                                           className="table-borderless"
                                    >
                                        <thead>
                                        <tr>
                                            <th>Si con tu ahorro hubieses abierto un APV:</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Ahorro en comisi{oacento}n:</td>
                                            <td className="text-right">{ahorroComision === null ? '$200' : '$'+parseInt(ahorroComision)+parseInt(200)}</td>
                                        </tr>
                                        <tr>
                                            <td>Ahorro APV anual:</td>
                                            <td className="text-right">{apvAhorroApvAnual === null ? '$0' : '$'+parseInt(apvAhorroApvAnual)+parseInt(0)}</td>
                                        </tr>
                                        <tr>
                                            <td className="blue-tabla">Bonificaci{oacento}n fiscal:</td>
                                            <td className="text-right blue-tabla">{apvAhorroApvAnual === null ? '$30' : '$'+parseInt(apvAhorroApvAnual)+parseInt(30)}</td>
                                        </tr>
                                        <tr>
                                            <td>Total APV</td>
                                            <td className="text-right">{apvTotalApv === null ? '$230' : '$'+parseInt(apvTotalApv)+parseInt(230)}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='row like'>
                        <div className='ctn col-12 d-flex justify-content-center'>
                            <p className='d-flex justify-content-end flex-column'>Si te gusto esta simulación te invitamos a ser parte de Afp Modelo y ver nuestros productos para ti.</p>
                            <img className='mx-3 desktop' src={manito} alt="like"/>
                        </div>
                    </div>
                    <div className='row ctas'>
                        <div className="ctn col-md-5 offset-md-1 d-flex flex-column">
                            <p className="text-center">{interrogacion}No eres afiliado de Afp Modelo?</p>
                            <div className='d-flex justify-content-center'>
                                <button
                                    type="button"
                                    id="Apertura_Afiliado"
                                    className="btn btn-lg btn-block"
                                    onClick={apertura_afiliado}
                                >C{aacento}mbiate a AFP Modelo</button>
                            </div>
                        </div>
                        <div className="ctn col-md-5 d-flex flex-column">
                            <p className="text-center">{interrogacion}Quieres saber los beneficios de abrir una APV? </p>
                            <div className='d-flex justify-content-center'>
                                <button type="button" id="Apertura_no_Afiliado" className="btn btn-lg btn-block blueBtn" onClick={conocer_apv}>Ir a Que APV me conviene</button>
                            </div>
                        </div>
                    </div>
                    <div className="row container-padre dudas">
                        <div className="ctn col-md-2 d-flex desktop">
                            <img src={mujerSAC} alt="Dudas" />
                        </div>
                        <div className="ctn col-sm-12 col-md-6 offset-md-2 d-flex flex-column contenedor">
                            <div className="txtDesktop parrafo2">
                                <div className="container-title">
                                    <h2>{interrogacion}A{uacento}n tienes dudas?</h2>
                                    <p>{dudas_texto}</p>
                                    <button type="button" id="Solicitud_Contacto" className="btn btn-lg btn-block whiteBtn" onClick={contactarme}>Quiero que me contacten</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    const uriBackend = process.env.URI_BACKEND;
    const urlIngresarSimulacion = `${uriBackend}${process.env.URI_INGRESAR_SIMULACION}`;
    const urlIngresarEvento = `${uriBackend}${process.env.URI_ENVIAR_EVENTO}`
    const { id } = context.query;

    /*
    const response = await axios
        .get(`${uriBackend}${process.env.URI_OBTENER_SIMULACION}?id=${id}`)

    const data = await response.data
    */
    const props = {
        //data,
        urlIngresarSimulacion,
        urlIngresarEvento
    }

    return { props: props }
}
