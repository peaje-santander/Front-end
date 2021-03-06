/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, Boxes, Button, Input} from '@components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const tracksData = [
    {
        Id: ' ',
        Nombre: ' ',
        Consorcio: ' ',
        Ubicación: ' ',
        Categoria: ' ',
        Valor: ' ',
        Acciones: ' '
    }
];
const AdminPeajes = () => {
    const formik = useFormik({
        initialValues: {
            Id: ' ',
            Nombre: '',
            Consorcio: '',
            Ubicacion: '',
            Categoria: '',
            Valor: ''
        },
        validationSchema: Yup.object({
            Id: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio '),
            Nombre: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Consorcio: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio'),
            Ubicacion: Yup.string()
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
                                        'Consorcio',
                                        'Ubicacion',
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
                                                    Id
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
                                                <label htmlFor="Ubicacion">
                                                    Ubicacion
                                                    <Input
                                                        placeholder="Ubicacion"
                                                        type="Text"
                                                        name="Ubicacion"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Ubicacion'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Ctegoria">
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

export default AdminPeajes;
