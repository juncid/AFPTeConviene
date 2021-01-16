import React, { useState } from "react";
import { Form, Formik, Field } from "formik";
import joven2 from "../public/assets/svg/joven2.svg"
import Stepper from 'react-stepper-horizontal';
import TerminosModal from "./TerminosModal";
import {aacento, iacento} from "../utils/caracteresUTF8";

export const Wizard = ({ children, initialValues, onSubmit }) => {

    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const [isValidoRetiro, setIsValidoRetiro] = useState(false);

    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children);
    const [snapshot, setSnapshot] = useState(initialValues);

    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const next = values => {
        setSnapshot(values);
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    };


    const handleSubmit = async (values, bag) => {
        if (step.props.onSubmit) {
            await step.props.onSubmit(values, bag);
        }
        if (isLastStep) {
            return onSubmit(values, bag);

        } else {
            bag.setTouched({});
            next(values);
        }
    };



    return (
        <div className="row">
            <div className="bloque form d-flex containerForm">
                <div className="card formulario">
                    <div>
                        <Stepper
                            steps={[{ title: '' }, { title: '' }  ]}
                            activeStep={stepNumber}
                            activeColor={"#72B500"}
                            completeColor={"#72B500"}
                        />
                    </div>
                    <div className="card-body">
                        <p>Conoce cu{aacento}l es la Afp que hace crecer tus ahorros:</p>
                        <Formik
                            initialValues={snapshot}
                            onSubmit={handleSubmit}
                            validationSchema={step.props.validationSchema}
                        >
                            {(formik) => (


                                <Form>
                                    {step}

                                    <div className="d-flex justify-content-center flex-column">
                                        {isLastStep &&
                                        <>
                                            <span> Indicanos si retiraste el 10%</span>
                                            <Field name="retiro10">
                                                {({
                                                      field,
                                                      meta
                                                  }) => (
                                                    <div className="form-group input-wrapper">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                {...field}
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="retiro10"
                                                                id="retiro1"
                                                                value="true"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="retiro1"
                                                            >
                                                                Si
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                {...field}
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="retiro10"
                                                                id="retiro2"
                                                                value="false"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="retiro2"
                                                            >No
                                                            </label>
                                                        </div>
                                                    </div>
                                                )}
                                            </Field>
                                            {formik.values.retiro10 === "true" ?
                                                <>
                                                    <span> ¿Cúal de los retiros realizaste?</span>
                                                <Field name="retiros_realizados">
                                                    {({
                                                          field,
                                                      }) => (
                                                        <div className="form-group input-wrapper">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    {...field}
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="retiros_realizados"
                                                                    id="retiros1"
                                                                    value="1"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="retiros1"
                                                                >
                                                                    Primero
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    {...field}
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="retiros_realizados"
                                                                    id="retiros2"
                                                                    value="2"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="retiros2"
                                                                >Segundo
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    {...field}
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="retiros_realizados"
                                                                    id="retiros3"
                                                                    value="3"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="retiros3"
                                                                >Ambos
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Field> </> : ''}
                                        </> }
                                        <div className="form-check">
                                            <Field name="terminosycondiciones">
                                                {({
                                                      field,
                                                      form: { touched, errors },
                                                  }) => (
                                                    <>
                                                        <label
                                                            className="form-check-label mt-auto"
                                                            htmlFor="terminosycondiciones"
                                                        >
                                                            <input
                                                                {...field}
                                                                type="checkbox"
                                                                className="form-check-input"
                                                            />
                                                            <small className="terminosycondiciones">
                                                                Acepto las{" "}
                                                                <a
                                                                    onClick={handleShow}
                                                                    className="modal-wizard"
                                                                >
                                                                    condiciones del servicio y la pol{iacento}
                                                                    tica de privacidad.
                                                                </a>
                                                            </small>
                                                        </label>
                                                        <small
                                                            id="terminosAyuda"
                                                            className={
                                                                `form-text ${touched.terminosycondiciones && errors.terminosycondiciones ? 'is-invalid' : ''}`}
                                                        >
                                                            {touched.terminosycondiciones && errors.terminosycondiciones ? errors.terminosycondiciones : ""}
                                                        </small>
                                                        <TerminosModal
                                                            show={modalShow}
                                                            onHide={handleClose}
                                                        />
                                                    </>
                                                )}
                                            </Field>
                                        </div>
                                        <div className="col justify-content-center d-flex">
                                            {stepNumber === 1 ?
                                                <button
                                                    type="submit"
                                                    id='P2_lead'
                                                    className="btn btn-lg btn-block purple"
                                                    disabled={!((formik.isValid && formik.dirty) && (formik.touched.retiro10 && formik.touched.retiros_realizados))}
                                                >
                                                    Calcular
                                                </button>
                                                :
                                                <button
                                                    type="submit"
                                                    id='P1_ingreso_datos_personales'
                                                    className="btn btn-lg btn-block purple"
                                                    disabled={!(formik.isValid && formik.dirty)}
                                                >
                                                    Comenzar
                                                </button>
                                            }

                                        </div>
                                    </div>
                                </Form>

                            )}
                        </Formik>
                    </div>
                </div>
                <div className="d-flex justify-content-center desktop jovenModelo">
                {<img src={joven2} alt="joven modelo" />}
            </div>
            </div>
        </div>
    );
};

export const WizardStep = ({ children }) => children;
