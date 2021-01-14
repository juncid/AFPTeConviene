import React, { useEffect } from "react";
import { useState } from "react";
import {eacento, iacento, oacento, comillaIzquierda, comillaDerecha} from '../utils/caracteresUTF8'


const Footer = () => {
    const [datosPrevisionales, setDatosPrevisionales] = useState({
    });
    useEffect(() => {
        const obtenerDatosPrevisionales = async () => {
            const filejson = await fetch("https://apvbackendmanager.azurewebsites.net/ApvSimulacion/obtenercomisiones");
            const resultado = await filejson.json();
            setDatosPrevisionales({
                mes: resultado["mes"],
                anio: resultado["anio"],
                capital: resultado["capital"],
                cuprum: resultado["cuprum"],
                habitat: resultado["habitat"],
                modelo: resultado["modelo"],
                planvital: resultado["planvital"],
                provida: resultado["provida"],
                uno: resultado["uno"]
            });
        };
        obtenerDatosPrevisionales();
    }, []);

    return (
        <footer className="footer">
            <div className="disclaimer text-white text-justify">
                <p>
                    AFP Modelo no se hace cargo de la veracidad de los datos que ingrese el usuario a
                    esta calculadora. La variaci{oacento}n de sueldo l{iacento}quido aproximada despu{eacento}s de impuestos,
                    sin asignaciones de colaci{oacento}n y/o movilizaci{oacento}n. Tabla de impuestos de segunda
                    categor{iacento}a actualizada a {datosPrevisionales.mes} de {datosPrevisionales.anio}. {comillaIzquierda}La rentabilidad es variable, por lo que
                    nada garantiza que las rentabilidades pasadas se repitan en el futuro. Inf{oacento}rmese
                    sobre la rentabilidad de su Fondo de Pensiones, las comisiones y la calidad de
                    servicio de las AFP en el sitio web de la Superintendencia de Pensiones:
                    www.spensiones.cl.{comillaDerecha} {comillaIzquierda}Estructura de comisiones por dep{oacento}sitos de cotizaciones vigentes
                    a {datosPrevisionales.mes} de {datosPrevisionales.anio} - Capital: {datosPrevisionales.capital}%,
                    Cuprum: {datosPrevisionales.cuprum}%, Habitat: {datosPrevisionales.habitat}%,
                    Modelo: {datosPrevisionales.modelo}%, Planvital: {datosPrevisionales.planvital}%,
                    Provida: {datosPrevisionales.provida}%, Uno {datosPrevisionales.uno}%{comillaDerecha}. Para
                    afiliados dependientes, independientes y voluntarios. Fuente: Superintendencia de
                    Pensiones.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
