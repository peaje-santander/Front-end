/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, SmallBox, Button, Input} from '@components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const tracksData = [
    {
        Fecha: ' ',
        Peaje: ' ',
        Ciudad: '',
        Categoria: ' ',
        Factura: '',
        Placa: '',
        FormaPago: ' ',
        Valor: ' ',
        Total: ' '
    }
];
const AdminFact = () => {
    const formik = useFormik({
        initialValues: {
            IdConsor: '',
            Info: ''
        },
        validationSchema: Yup.object({
            IdConsor: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .required('Obligatorio '),
            Info: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio')
        }),
        onSubmit: (values) => {
            // eslint-disable-next-line no-console
            console.log(values.IdConsor, values.Info);
        }
    });
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col col">
                                    <SmallBox
                                        count="Consorcio"
                                        title=" "
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Peajes"
                                        title=""
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Empleados"
                                        title=""
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Facturacion"
                                        title=""
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Cobro"
                                        title=""
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                            </div>
                            <div>
                                <Table
                                    tableData={tracksData}
                                    headingColumns={[
                                        'Fecha',
                                        'Peaje',
                                        'Ciudad',
                                        'Categoria',
                                        'Factura',
                                        'Placa',
                                        'FormaPago',
                                        'Valor',
                                        'Total'
                                    ]}
                                    title="Top F1 tracks"
                                    breakOn="small"
                                />
                            </div>
                            <div className="comienzo">
                                <div className="card card-outline card-primary">
                                    <div className="card-header text-center" />
                                    <div className="card-body">
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="Fecha">
                                                    Fecha
                                                    <Input
                                                        placeholder="Fecha"
                                                        type="String"
                                                        name="Fecha"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Fecha'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Peaje">
                                                    Peaje
                                                    <Input
                                                        placeholder="Peaje"
                                                        type="Text"
                                                        name="Peaje"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Peaje'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Ciudad">
                                                    Ciudad
                                                    <Input
                                                        placeholder="Ciudad"
                                                        type="Text"
                                                        name="Ciudad"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Ciudad'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Categoria">
                                                    Categora
                                                    <Input
                                                        placeholder="Categoria"
                                                        type="String"
                                                        name="Categoria"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Categoria'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Fatura">
                                                    Factura
                                                    <Input
                                                        placeholder="Factura"
                                                        type="String"
                                                        name="Factura"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Factura'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Placa">
                                                    Placa
                                                    <Input
                                                        placeholder="Placa"
                                                        type="String"
                                                        name="Placa"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Placa'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="FormaPago">
                                                    Forma de Pago
                                                    <Input
                                                        placeholder="FormaPago"
                                                        type="Text"
                                                        name="FormaPago "
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'FormaPago'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Valor">
                                                    Valor
                                                    <Input
                                                        placeholder="Valor"
                                                        type="String"
                                                        name="Valor"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Valor'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div>
                                                <label htmlFor="Total">
                                                    Total
                                                    <Input
                                                        placeholder="Total"
                                                        type="Text"
                                                        name="Total"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Total'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <Button block type="submit">
                                                        Crear
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminFact;
