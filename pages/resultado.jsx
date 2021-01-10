import React, { useEffect, useState } from 'react';
import Head from "next/head";
import mujerSAC from "../public/assets/svg/mujersac.svg"
import corazon from "../public/assets/svg/corazon.svg"

import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../store/actions/postAction";
import { Card, Col, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import MaskedInput from "react-text-mask";
import { dineroMask } from "../utils/inputMask"
import { cleanDigitos } from '../utils/cleanInputMask';



export default function Resultado(props) {

    const aacento = "\u00e1";
    const eacento = "\u00e9";
    const iacento = "\u00ed";
    const oacento = "\u00f3";
    const uacento = "\u00fa";
    const enhe = '\u00f1';
    const interrogacion = '\u00BF';
    const comillaIzquierda = '\u201C';
    const comillaDerecha = '\u201D';

    const headers = {
        "Content-Type": "application/json"
    };

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const [regimenData, setRegimenData] = useState({});


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
    }

    function apertura_afiliado() {
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
    }

    const dudas_texto =
        `Nuestros ejecutivos pueden asesorarte en l${iacento}nea o v${iacento}a tel${eacento}fonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.`;

    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Resultado Simulaci{oacento}n | AFP Modelo</title>
                <meta name="description" content={`Aumenta tu sueldo l${iacento}quido, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <section>
                <div className="resultado">
                    <div className="row">
                        <div className="col-12 mx-auto text-left header">
                            <div className='offset-1 d-flex justify-content-left flex-column'>
                                <div className="row">
                                    <h2>Tus ahorros crecen con Afp Modelo </h2>
                                    <img src={corazon} alt="corazon"/>
                                </div>
                                <p>La combinanción de la rentabilidad que obtienes con AFP Modelo menos la
                                    comisión que pagarías da como resultado un mayor ahorro para ti.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 offset-md-1 d-flex flex-column">
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
                                                <th>{''}</th>
                                                <th className="text-right">{''}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Rentabilidad AFP Actual:</td>
                                                <td className="text-right">Valor A</td>
                                            </tr>
                                            <tr>
                                                <td>Rentabilidad AFP Modelo:</td>
                                                <td className="text-right">Valor B</td>
                                            </tr>
                                            <tr>
                                                <td className="green-tabla">Diferencia de rentabilidad:</td>
                                                <td className="text-right green-tabla">Valor C</td>
                                            </tr>
                                            <tr>
                                                <td>Ahorro en comisi{oacento}n</td>
                                                <td className="text-right">VD = (VA-(VB-VC))</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-5 d-flex flex-column calcularApv">
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
                                            <th>{''}</th>
                                            <th className="text-right">{''}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Ahorro en comisi{oacento}n:</td>
                                            <td className="text-right">Valor A</td>
                                        </tr>
                                        <tr>
                                            <td>Ahorro APV anual:</td>
                                            <td className="text-right">Valor B</td>
                                        </tr>
                                        <tr>
                                            <td className="green-tabla">Bonificaci{oacento}n fiscal:</td>
                                            <td className="text-right green-tabla">Valor C</td>
                                        </tr>
                                        <tr>
                                            <td>Total APV</td>
                                            <td className="text-right">VD = (VA-(VB-VC))</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className='row ctas'>
                        <div className="col-md-4 text-center d-block offset-md-2 container">
                            <p>{interrogacion}No eres afiliado de Afp Modelo?</p>
                            <div className='d-flex justify-content-center'>
                                <button
                                    type="button"
                                    id="Apertura_Afiliado"
                                    className="btn btn-lg btn-block"
                                    onClick={apertura_afiliado}
                                >C{aacento}mbiate a AFP Modelo</button>
                            </div>
                        </div>
                        <div className="col-md-5 text-center d-block container">
                            <p>{interrogacion}Quieres saber los beneficios de abrir una APV? </p>
                            <div className='d-flex justify-content-center'>
                                <button type="button" id="Apertura_no_Afiliado" className="btn btn-lg btn-block blueBtn" onClick={contactarme}>Ir a Que APV me conviene</button>
                            </div>
                        </div>
                    </div>
                    <div className="row container-padre dudas">
                        <div className="col-md-2 d-flex desktop">
                            <img src={mujerSAC} alt="Dudas" />
                        </div>
                        <div className="col-sm-12 col-md-6 offset-md-2 d-flex flex-column contenedor">
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