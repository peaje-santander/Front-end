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
            IdCategoria: '',
            IdPlaca: '',
            IdFactura: '',
            Recarga: false,
            RFID: false,
            Efectivo: false,
            PgTarjeta: false,
            Saldo: '',
            FechaTarjeta: '',
            NumeroTarjeta: ''
        },
        validationSchema: Yup.object({
            IdCategoria: Yup.string()
                .min(1, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            IdPlaca: Yup.string()
                .min(1, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            IdFactura: Yup.string()
                .min(1, 'Debe tener al menos 1 caracteres')
                .required('Obligatorio '),
            RFID: Yup.boolean().oneOf([true], 'a'),
            Recarga: Yup.boolean().oneOf([true], 'a'),
            PgTarjeta: Yup.boolean().oneOf([true], 'a'),
            Efectivo: Yup.boolean().oneOf([true], 'a').required('Obligatorio ')
        }),
        onSubmit: (values) => {
            // eslint-disable-next-line no-console
            console.log(
                values.IdCategoria,
                values.IdFactura,
                values.IdPlaca,
                values.RFID
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
                                                htmlFor="PgTarjeta"
                                            >
                                                Pagar con tarjeta
                                                <Checkbox
                                                    name="PgTarjeta"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'PgTarjeta'
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
                                                        'PgTarjeta'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row justify-content-evenly">
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="IdPlaca"
                                            >
                                                Placa
                                                <Input
                                                    placeholder="No. placa"
                                                    type="text"
                                                    name="IdPlaca"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'IdPlaca'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="IdDocumento"
                                            >
                                                No. Cedula
                                                <Input
                                                    placeholder="No. Cedula"
                                                    type="text"
                                                    id="IdDocumento"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'IdDocumento'
                                                    )}
                                                />
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label
                                                className="form-label"
                                                htmlFor="ValorRecarga"
                                            >
                                                Valor
                                                <Input
                                                    placeholder="Valor a recargar"
                                                    type="text"
                                                    id="ValorRecarga"
                                                    formik={formik}
                                                    formikFieldProps={formik.getFieldProps(
                                                        'ValorRecarga'
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
                                            htmlFor="NumTarjetas"
                                        >
                                            No. de tarjeta
                                            <Input
                                                placeholder="No. de tarjeta"
                                                type="password"
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
                                            htmlFor="ExpFecha"
                                        >
                                            Fecha de expiracion
                                            <Input
                                                placeholder="mm/aa"
                                                type="password"
                                                id="ExpFecha"
                                                formik={formik}
                                                formikFieldProps={formik.getFieldProps(
                                                    'ExpFecha'
                                                )}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-4">
                                        <label
                                            className="form-label"
                                            htmlFor="CodigoSeg"
                                        >
                                            Codigo de seguridad
                                            <Input
                                                placeholder="123"
                                                type="password"
                                                id="CodigoSeg"
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
