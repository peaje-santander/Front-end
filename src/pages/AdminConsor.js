/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, Boxes, Button, Input} from '@components';
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
            Consorcio: ' ',
            Nombre: '',
            Ciudad: '',
            Peajes: '',
            Categoria: '',
            Valor: ''
        },
        validationSchema: Yup.object({
            Consorcio: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Nombre: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Ciudad: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Peajes: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Categoria: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Valor: Yup.string()
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
                            <Boxes />
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
                                                <label htmlFor="Consorcio">
                                                    Consorcio
                                                    <Input
                                                        placeholder="Consorcio"
                                                        type="Text"
                                                        name="Consorcio"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Consorcio'
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
                                                    Valor
                                                    <Input
                                                        placeholder="Valor"
                                                        type="Text"
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
