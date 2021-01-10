import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ampolleta from "../public/assets/svg/ampolleta.svg";
import backgroundMobile from "../public/assets/svg/mobiles/backgroundMobile.svg";
import APVForm from "../components/ApvForm";
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import joven2 from "../public/assets/svg/joven2.svg";


export default function Home(props) {
    const router = useRouter()
    const bearer = props.bearer;
    const urlPostSimulacion = props.urlPostSimulacion;
    const aacento = '\u00e1';
    const eacento = '\u00e9';
    const iacento = '\u00ed';
    const oacento = '\u00f3';
    const uacento = '\u00fa';
    const enhe = '\u00f1';
    const interrogacion = '\u00BF';


    if (typeof window !== "undefined") {
        localStorage.setItem('sessionId', props.idSesion);
        localStorage.setItem('rut', props.rutConsultaRegimen);
    }

    const headers = {
        "Content-Type": "application/json"
    };

    const body_eventos_regimenes = {
        "sessionId": props.idSesion,
        "eventoId": 0,
        "result0": 0,
        "result1": 0,
        "result2": 0,
        "rut": props.rutConsultaRegimen
    }

    /*
    function conocer_regimen_a(e) {
        e.preventDefault()
        body_eventos_regimenes.EventoId = 5;

        axios
            .post(props.urlIngresarEvento, body_eventos_regimenes, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    router.push({
                        pathname: '/regimenA',
                    })
                }
            })
            .catch(e => {
                console.log(e);
            });

    }


    function conocer_regimen_b(e) {
        e.preventDefault()
        body_eventos_regimenes.EventoId = 6;


        axios
            .post(props.urlIngresarEvento, body_eventos_regimenes, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    router.push({
                        pathname: '/regimenB',
                    })
                }
            })
            .catch(e => {
                console.log(e);
            });

    }
     */

    return (
        <div className="container home">
            <Head>

                <title>Ahorro Previsional Voluntario | Simula tu APV | AFP Modelo</title>
                <meta name="description" content={`Aumenta tu sueldo l${iacento}quido, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div>
                <section>
                    <div className="row w-100 container-padre calculadora">
                        <div className="col-12 d-flex justify-content-center mobile">
                            <div className="container-title">
                                <h1>Conoce cuánto</h1>
                                <h1>aumentaría tu sueldo,</h1>
                                <h1>al cambiarte a</h1>
                                <h1>AFP Modelo.</h1>
                                <p>
                                    Únete a la AFP con una de las comisiones más bajas del mercado.
                                </p>
                                <br></br>
                                <br></br>
                                <img src={ampolleta} alt="ampolleta" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 bloque desktop">
                            <div className="txtDesktop">
                                <div className="container-title">
                                    <h1>Conoce cuánto</h1>
                                    <h1>aumentaría tu</h1>
                                    <h1>sueldo,</h1>
                                    <h1 className="green">al cambiarte a</h1>
                                    <h1 className="green">AFP Modelo.</h1>
                                    <p>
                                        Únete a la AFP con una de las comisiones más bajas del
                                        mercado.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12  col-md-7 bloque form">
                            <APVForm token={bearer} urlPostSimulacion={urlPostSimulacion} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const baseUrl = process.env.URI_BACKEND;
    const apiToken = process.env.URI_GENERATE_TOKEN;
    const uriIngresarSimulacion = process.env.URI_INGRESAR_SIMULACION;
    const urlGetToken = `${baseUrl}${apiToken}`;
    const urlPostSimulacion = `${baseUrl}${uriIngresarSimulacion}`;
    const rutConsultaRegimen = process.env.RUT_CONSULTA_REGIMEN;
    const urlIngresarEvento = `${baseUrl}${process.env.URI_ENVIAR_EVENTO}`

    const response = await axios
        .get(urlGetToken);
    const bearer = await response.data.key;
    const idSesion = uuidv4();
    if (!bearer) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const props= {
        bearer,
        urlPostSimulacion,
        idSesion,
        rutConsultaRegimen,
        urlIngresarEvento
    }

    return { props: props }

}