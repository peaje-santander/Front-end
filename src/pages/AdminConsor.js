/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, SmallBox, Button, Input} from '@components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const tracksData = [
    {
        Id: ' ',
        Nombre: ' ',
        Ciudad: ' ',
        Peajes: ' ',
        Categoria: ' ',
        Valor: ' ',
        Acciones: ' '
    }
];
const AdminConsorcio = () => {
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
                                        title=""
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Peajes"
                                        title=" "
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Empleados"
                                        title=" "
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Facturacion"
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count="Cobrar"
                                        title=" "
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
                                        'Id',
                                        'Nombre',
                                        'Ciudad',
                                        'Peajes',
                                        'Categoria',
                                        'Valor',
                                        'Acciones'
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
                                                <label htmlFor="Id">
                                                    Consorcio
                                                    <Input
                                                        placeholder="Id"
                                                        type="String"
                                                        name="Id"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Id'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Nombre">
                                                    Nombre
                                                    <Input
                                                        placeholder="Nombre"
                                                        type="Text"
                                                        name="Nombre"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Nombre'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
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
                                            <div className="mb-3">
                                                <label htmlFor="Peajes">
                                                    Peajes
                                                    <Input
                                                        placeholder="Peajes"
                                                        type="Text"
                                                        name="Peajes"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Peajes'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Categoria">
                                                    Categoria
                                                    <Input
                                                        placeholder="Categoraia"
                                                        type="Text"
                                                        name="Categoria"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Categoria'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Valor">
                                                    valor
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

export default AdminConsorcio;
