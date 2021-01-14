
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
                    console.log(values);
                    console.log(props);
                    /*
                    const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${props.token}`
                    };

                    const url = `${props.urlPostSimulacion}`;

                    const body = {
                        nombre: values.nombre,
                        rut: cleanRut(values.rut),
                        correo: values.correo,
                        celular: cleanDigitos(values.celular),
                        sueldo: cleanDigitos(values.sueldo),
                        ahorro: cleanDigitos(values.ahorro)
                    };

                    axios
                        .post(url, body, { headers: headers })
                        .then((response) => {
                            let data = response.data;


                            if (data.idSimulacion) {
                                router.push({
                                    pathname: "/resultado",
                                    query: {
                                        id: data.idSimulacion,
                                    },
                                });
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        });

                    */
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
                                    <option value="3">AFP Plan Vital</option>
                                    <option value="4">AFP Provida</option>
                                    <option value="6">AFP Uno</option>
                                </select>
                                <small
                                    id="ahorroAyuda"
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
