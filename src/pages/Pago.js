/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './pago.css';
import {Checkbox, Button, Input} from '@components';
import {useFormik} from 'formik';

import * as Yup from 'yup';

const Pago = () => {
    const formik = useFormik({
        initialValues: {
            Recarga: false,
            RFID: false,
            PagoTarjeta: false,
            Efectivo: false,
            Placa: '',
            Documento: '',
            Valor: '',
            Nombre: '',
            NumTarjeta: '',
            FechaTarjeta: '',
            CVV: ''
        },
        validationSchema: Yup.object({
            RFID: Yup.boolean().oneOf([true], 'a'),
            Recarga: Yup.boolean().oneOf([true], 'a'),
            PagoTarjeta: Yup.boolean().oneOf([true], 'a'),
            Efectivo: Yup.boolean().oneOf([true], 'a').required('Obligatorio '),
            Nombre: Yup.string()
                .min(2, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            Placa: Yup.string()
                .min(6, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            Documento: Yup.string()
                .min(10, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            Valor: Yup.string()
                .min(2, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            FechaTarjeta: Yup.string()
                .min(4, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            NumTarjeta: Yup.string()
                .min(12, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            CVV: Yup.string()
                .min(3, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio ')
        }),
        onSubmit: (values) => {
            console.log(
                values.Placa,
                values.RFID,
                values.CVV
            );
        }
    });

    return (
        <div>
            <div id="bgpago">
                <div className="container-sm">
                    <div className="card card-outline card-primary">
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="container">
                                    <div className="row justify-content-evenly">
                                        <div className="col-sm">
                                            <label
                                                className="form-label"
                                                htmlFor="Recarga"
                                            >
                                                Recargar
                                                <Checkbox
                                                    name="Recarga"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Recarga'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-sm">
                                            <label
                                                className="form-label"
                                                htmlFor="RFID"
                                            >
                                                Comprar RFID
                                                <Checkbox
                                                    name="RFID"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Recarga'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-sm">
                                            <label
                                                className="form-label"
                                                htmlFor="PagoTarjeta"
                                            >
                                                Pagar con tarjeta
                                                <Checkbox
                                                    name="PagoTarjeta"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'PagoTarjeta'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-sm">
                                            <label
                                                className="form-label"
                                                htmlFor="Efectivo"
                                            >
                                                Efectivo
                                                <Checkbox
                                                    name="Efectivo"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Efectivo'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row justify-content-evenly">
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="Placa"
                                            >
                                                Placa
                                                <Input
                                                    placeholder="No. placa"
                                                    type="Text"
                                                    name="Placa"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Placa'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="Documento"
                                            >
                                                No. Cedula
                                                <Input
                                                    placeholder="No. Cedula"
                                                    type="text"
                                                    id="Documento"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Documento'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="Valor"
                                            >
                                                Valor
                                                <Input
                                                    placeholder="Valor a recargar"
                                                    type="text"
                                                    id="Valor"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'Valor'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-evenly">
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="Nombre"
                                        >
                                            Nombre de titular
                                            <Input
                                                placeholder="Nombre completo"
                                                type="text"
                                                formik={formik}
                                                id="Nombre"
                                                formikFieldProps={formik.getFieldProps(
                                                    'Nombre'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="NumTarjeta"
                                        >
                                            No. de tarjeta
                                            <Input
                                                placeholder="No. de tarjeta"
                                                type="CVV"
                                                id="NumTarjeta"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'NumTarjeta'
                                                )}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="row justify-content-evenly">
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="FechaTarjeta"
                                        >
                                            Fecha de expiracion
                                            <Input
                                                placeholder="mm/aa"
                                                type="Text"
                                                name="FechaTarjeta"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'FechaTarjeta'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="CVV"
                                        >
                                            Codigo de seguridad
                                            <Input
                                                placeholder="123"
                                                type="Text"
                                                name="CVV"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'CVV'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <Button block type="submit">
                                            Pagar
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="bgpagologo" />
        </div>
    );
};

export default Pago;
