/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './pago.css';
import {Checkbox, Button, Input} from '@components';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';

import * as Yup from 'yup';

const Pago = () => {
    const [t] = useTranslation();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email inválido')
                .required('Obligatorio '),
            password: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio')
        }),
        onSubmit: (values) => {
            Pago(values.email, values.password);
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
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="placa"
                                            >
                                                Placa
                                                <Input
                                                    placeholder="No. placa"
                                                    type="text"
                                                    id="placa"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'password'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="p2"
                                            >
                                                No. Cedula
                                                <Input
                                                    placeholder="No. Cedula"
                                                    type="text"
                                                    id="p2"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'password'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="p3"
                                            >
                                                Valor
                                                <Input
                                                    placeholder="Valor a recargar"
                                                    type="text"
                                                    id="p3"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'password'
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
                                            htmlFor="p4"
                                        >
                                            Nombre de titular
                                            <Input
                                                placeholder="Nombre completo"
                                                type="text"
                                                formik={formik}
                                                id="p4"
                                                formikFieldProps={formik.getFieldProps(
                                                    'password'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="p5"
                                        >
                                            No. de tarjeta
                                            <Input
                                                placeholder="No. de tarjeta"
                                                type="password"
                                                id="p5"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'password'
                                                )}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="row justify-content-evenly">
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="p6"
                                        >
                                            Fecha de expiracion
                                            <Input
                                                placeholder="mm/aa"
                                                type="password"
                                                id="p6"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'password'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="p7"
                                        >
                                            Codigo de seguridad
                                            <Input
                                                placeholder="123"
                                                type="password"
                                                id="p7"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'password'
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
                                <div className="row">
                                    <div className="col-8">
                                        <Checkbox
                                            checked={false}
                                            label={t('login.label.rememberMe')}
                                        />
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
