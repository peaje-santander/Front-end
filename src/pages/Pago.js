/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './pago.css';
import {Link} from 'react-router-dom';
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
                <div className="container-md">
                    <div className="card card-outline card-primary">
                        <div className="card-body">
                            <p className="login-box-msg">
                                {t('login.label.signIn')}
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        formik={formik}
                                        formikFieldProps={formik.getFieldProps(
                                            'email'
                                        )}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Input
                                        placeholder="Contraseña"
                                        type="password"
                                        formik={formik}
                                        formikFieldProps={formik.getFieldProps(
                                            'password'
                                        )}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-8">
                                        <Checkbox
                                            checked={false}
                                            label={t('login.label.rememberMe')}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <Button block type="submit">
                                            {t('login.button.signIn.label')}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                            <p className="mb-1">
                                <Link to="/forgot-password">
                                    {t('login.label.forgotPass')}
                                </Link>
                            </p>
                            <p className="mb-0">
                                <Link to="/register" className="text-center">
                                    {t('login.label.registerNew')}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="bgpagologo" />
        </div>
    );
};

export default Pago;
