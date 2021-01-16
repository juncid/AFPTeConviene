
import React, { useState, useEffect } from "react";
import { Field} from "formik";
import { Wizard, WizardStep } from "./WizardComponent";
import { Step1Schema, Step2Schema} from "../utils/validationSchemaWizard";
import { useRouter } from 'next/router';
import axios from 'axios';
import MaskedInput from "react-text-mask";
import { celularMask, dineroMask, rutMask } from "../utils/inputMask";
import { cleanDigitos, cleanRut } from "../utils/cleanInputMask";
import {iacento} from "../utils/caracteresUTF8";

const APVForm = (props) => {
    const router = useRouter();

    const initialValues = {
        nombre: '',
        rut: '',
        correo: '',
        celular: '',
        sueldo: '',
        ahorro: '',
        afp:'',
        terminosycondiciones: false,
        retiro10: 'false',
        retiros_realizados: '0'
    };

    return (
        <div className='wizardForm'>
            <Wizard
                initialValues={initialValues}
                onSubmit={values => {

                    const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${props.token}`
                    };

                    const url = `${props.urlPostSimulacion}`;

                    let tipoRetiro1 = false;
                    let tipoRetiro2 = false;
                    let retiro10 = false;

                    if(values.retiro10Porciento)
                    {
                        retiro = true;
                      if(values.retiros_realizados === 1){
                        tipoRetiro1 = true;    
                      } else if (values.retiros_realizados === 2) {
                        tipoRetiro2 = true;    
                      } else {
                        tipoRetiro1 = true;
                        tipoRetiro2 = true;  
                      }     
                    } else {
                       tipoRetiro1 = false;
                       tipoRetiro2 = false;    
                    }

                    const body= {
                        nombreCompleto: values.nombre,
                        rut: cleanRut(values.rut),
                        correo: values.correo,
                        numeroTelefonico: cleanDigitos(values.celular),
                        aceptaCondicionesDeUso: values.terminosycondiciones,
                        sueldoLiquido: cleanDigitos(values.sueldo),
                        montoAhorrado: cleanDigitos(values.ahorro),
                        idAfp: parseInt(values.afp),
                        multifondo: values.multifondo,
                        retiro10Porciento: retiro10,
                        tipoRetiro1: tipoRetiro1,
                        tipoRetiro2: tipoRetiro2
                    };

                    axios
                        .post(url, body, { headers: headers })
                        .then((response) => {
                            let data = response.data;  

                            if (data) {

                                localStorage.setItem('ahorroEnComision', data.ahorroEnComision);
                                localStorage.setItem('apvAhorroApvAnual', data.apvAhorroApvAnual === null ? '0' : data.apvAhorroApvAnual );
                                localStorage.setItem('apvBonificacionFiscal', data.apvBonificacionFiscal === null ? '0' : data.apvBonificacionFiscal);
                                localStorage.setItem('apvTotalApv', data.apvTotalApv === null ? '0' : data.apvTotalApv);
                                localStorage.setItem('cuotaInicial', data.cuotaInicial);
                                localStorage.setItem('diferenciaDeRentabilidad', data.diferenciaDeRentabilidad);
                                localStorage.setItem('rentabilidadAfpActual', data.rentabilidadAfpActual);
                                localStorage.setItem('rentabilidadAfpModelo', data.rentabilidadAfpModelo);
                                localStorage.setItem('resntaImponible', data.resntaImponible);
                                localStorage.setItem('rut', cleanRut(values.rut));
                                
                                console.log("guardando evento");

                                router.push({
                                    pathname: "/resultado",
                                });

                                /*
                                const result2=data.apvTotalApv === null ? '0' : data.apvTotalApv;

                                const body_eventos = {
                                    "sessionId": props.idSesion,
                                    "eventoId": 11,
                                    "result0": parseInt(data.rentabilidadAfpModelo),
                                    "result1": parseInt(data.rentabilidadAfpActual),
                                    "result2": parseInt(result2),
                                    "rut": cleanRut(values.rut)
                                }

                                
                                axios
                                    .post(props.urlIngresarEvento, body_eventos, { headers: headers })
                                    .then((response) => {
                                        let data = response.data;
                                        console.log(response);
                            
                                        if (data) {
                                            router.push({
                                                    pathname: "/resultado",
                                            });
                                        }
                                    })
                                    .catch(e => {
                                        console.log(e);
                                    });

                                */
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }}
            >
                <WizardStep
                    onSubmit={() => console.log('Step1 onSubmit')}
                    validationSchema={Step1Schema}
                >
                    <Field name="nombre">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="nombre"
                                    className="control-label"
                                >
                                    Nombre
                                </label>

                                <input
                                    {...field}
                                    type="text"
                                    className={`form-control form-control-lg 
                                        ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="nombre"
                                    aria-describedby="nombreAyuda"
                                    placeholder="Nombre"
                                />
                                <small
                                    id="nombreAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""
                                        }`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : "Indicanos tu nombre y apellido."}
                                </small>
                            </div>
                        )}
                    </Field>
                    <Field name="rut">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="rut"
                                    className="control-label"
                                >
                                    RUT
                                </label>
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={rutMask}
                                    className={`form-control form-control-lg 
                                    ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="rut"
                                    aria-describedby="rutAyuda"
                                    placeholder="RUT"
                                />
                                <small
                                    id="rutAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : "Ej. 12.345.678-9."}
                                </small>
                            </div>
                        )}
                    </Field>
                    <Field name="correo">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="correo"
                                    className="control-label"
                                >
                                    Correo
                                </label>
                                <input
                                    {...field}
                                    type="email"
                                    className={`form-control form-control-lg 
                                        ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="correo"
                                    aria-describedby="correoAyuda"
                                    placeholder="Correo"
                                />
                                <small
                                    id="correoAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : "Ej. aumentatusueldo@afpmodelo.cl"}
                                </small>
                            </div>
                        )}
                    </Field>
                    <Field name="celular">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="celular"
                                    className="control-label"
                                >
                                    Celular
                                </label>
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={celularMask}
                                    className={`form-control form-control-lg 
                                    ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="celular"
                                    aria-describedby="celularAyuda"
                                    placeholder={`9 ____ ____`}
                                />
                                <small
                                    id="celularAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : "Ej. 9 1112 23XX"
                                    }
                                </small>
                            </div>
                        )}
                    </Field>
                </WizardStep>
                <WizardStep
                    onSubmit={() => console.log('Step2 onSubmit')}
                    validationSchema={Step2Schema}
                >
                    <Field name="sueldo"
                    >
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="sueldo"
                                    className={"control-label"}>sueldo
                                </label>
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={dineroMask}
                                    className={`form-control form-control-lg 
                                    ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="sueldo"
                                    aria-describedby="sueldoAyuda"
                                    placeholder={`Sueldo L${iacento}quido`}
                                />
                                <small
                                    id="sueldoAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : `El sueldo l${iacento}quido que recibes luego de los descuentos legales.`
                                    }
                                </small>
                            </div>
                        )}
                    </Field>
                    <Field name="ahorro">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper">
                                <label
                                    htmlFor="ahorro"
                                    className="control-label"
                                >
                                    Monto Ahorrado
                                </label>
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    mask={dineroMask}
                                    className={`form-control form-control-lg 
                                    ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""}`}
                                    id="ahorro"
                                    aria-describedby="ahorroAyuda"
                                    placeholder="Monto Ahorrado"
                                />
                                <small
                                    id="ahorroAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error
                                        ? meta.error
                                        : `El monto que tienes actualmente en tu cuenta obligatoria.`
                                    }
                                </small>
                            </div>
                        )}
                    </Field>

                    <Field name="afp">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper select">
                                <label htmlFor="afp">
                                    Ind{iacento}canos tu AFP actual:
                                </label>
                                <select
                                    {...field}
                                    className="form-control form-control-lg"
                                    id="afp"
                                    name="afp"
                                >
                                    {" "}
                                    <option value="default">
                                        Seleccione una AFP
                                    </option>
                                    <option value="0">AFP Capital</option>
                                    <option value="1">AFP Cuprum</option>
                                    <option value="2">AFP Habitat</option>
                                    <option value="3">AFP PlanVital</option>
                                    <option value="4">AFP Provida</option>
                                    <option value="6">AFP Uno</option>
                                </select>
                                <small
                                    id="afpAyuda"
                                    className={`form-text ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error}
                                </small>
                            </div>
                        )}
                    </Field>

                    <Field name="multifondo">
                        {({
                              field,
                              meta
                          }) => (
                            <div className="form-group input-wrapper select">
                                <label htmlFor="multifondo">
                                    Ind{iacento}canos tu Multifondo actual:
                                </label>
                                <select
                                    {...field}
                                    className="form-control form-control-lg"
                                    id="multifondo"
                                    name="multifondo"
                                >
                                    {" "}
                                    <option value="default">
                                        Seleccione un Multi Fondo
                                    </option>
                                    <option value="0">A</option>
                                    <option value="1">B</option>
                                    <option value="2">C</option>
                                    <option value="3">D</option>
                                    <option value="4">E</option>
                                </select>
                                <small
                                    id="multifondoAyuda"
                                    className={`form-text 
                                        ${meta.touched && meta.error ? "is-invalid" : ""}`}
                                >
                                    {meta.touched && meta.error}
                                </small>
                            </div>
                        )}
                    </Field>


                </WizardStep>
            </Wizard>
        </div>

    );
};



export default APVForm;
