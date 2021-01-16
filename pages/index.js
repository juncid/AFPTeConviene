import Head from 'next/head'
import React, { useEffect, useState } from "react";
import shapeBkg from "../public/assets/svg/mobiles/backgroundMobile.svg";
import APVForm from "../components/ApvForm";
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import {iacento, oacento} from "../utils/caracteresUTF8";


export default function Home(props) {
    const router = useRouter();
    const bearer = props.bearer;
    const urlPostSimulacion = props.urlPostSimulacion;
    //console.log(props);

    if (typeof window !== "undefined") {
        localStorage.setItem('bearer', props.bearer);
        localStorage.setItem('sessionId', props.idSesion);
    }

    return (
        <div className="container home">
            <Head>

                <title>Que AFP te Conviene | Simula cuanto hubieses ahorrado en AFP Modelo | AFP Modelo</title>
                <meta name="description" content={`Aumenta tus ahorros, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de ahorro al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div>
                <section>
                    <div className="row w-100 container-padre calculadora">
                        <div className="col-12 d-flex justify-content-center mobile">
                            <div className="container-title">
                                    <h1>Compara tu afp con AFP modelo,
                                        <br/>
                                        <span className="green">y descubre cuál te conviene más.</span>
                                    </h1>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                        <div className="col-12 d-flex mobile">
                            <p className='txtMobileShape'>La comisión y la rentabilidad hacen una diferencia en tus ahorros. Revisa cuánto hubieras ahorrado con Modelo</p>
                            <img src={shapeBkg} className="background " alt="compara tu AFP"/>
                        </div>
                        <div className="bloque desktop">
                            <div className="txtDesktop">
                                <div className="container-title">
                                <h1>Compara tu afp con AFP modelo,
                                        <br/>
                                        <span className="green">y descubre cuál te conviene más.</span>
                                    </h1>
                                    <p>
                                    La rentabilidad y la comisión pueden hacer una gran diferencia en tu pensión. Mira cuanto podrías haber ahorrado en AFP Modelo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bloque form">
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
        urlIngresarEvento
    }

    return { props: props }

}
