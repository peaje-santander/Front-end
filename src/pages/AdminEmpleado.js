/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, SmallBox, Button, Input} from '@components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const tracksData = [
    {
        TipoDocumento: ' ',
        Número: '',
        Nombre: '',
        Email: '',
        Teléfono: '',
        dirección: '',
        Consorcio: '',
        Ciudad: '',
        Acciones: ''
    }
];

const AdminEmpleado = () => {
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
                                        count="consorcio"
                                        title=" "
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
                                        count="Facturación"
                                        title=" "
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="Cobro">
                                    <SmallBox
                                        count="Cobro"
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
                                        'Tipodocumento',
                                        'Número',
                                        'Nombre',
                                        'Email',
                                        'Teléfono',
                                        'dirección',
                                        'Consorcio',
                                        'Ciudad',
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
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="TipoDocumento">
                                                    Tipo de Documento
                                                    <Input
                                                        placeholder="TipoDocumento"
                                                        type="Text"
                                                        name="TipoDocumento"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'TipoDocumento'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Numero">
                                                    Número
                                                    <Input
                                                        placeholder="Numero"
                                                        type="sting"
                                                        name="Numero"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Numero'
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
                                                <label htmlFor="Email">
                                                    Email
                                                    <Input
                                                        placeholder="Email"
                                                        type="Text"
                                                        name="Email"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Email'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Teléfono">
                                                    Teléfono
                                                    <Input
                                                        placeholder="Telefono"
                                                        type="string"
                                                        name="Telefono"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Telefono'
                                                        )}
                                                    />
                                                </label>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Direccion">
                                                    Dirección
                                                    <Input
                                                        placeholder="Nombre"
                                                        type="string"
                                                        name="Direccion"
                                                        formik={formik}
                                                        formikFieldProps={formik.getFieldProps(
                                                            'Direccion'
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

                                            <div className="row">
                                                <div className="col-4">
                                                    <Button block type="submit">
                                                        Crear
                                                    </Button>
                                                </div>
                                                <div className="col-4">
                                                    <Button block type="submit">
                                                        Cancelar
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

export default AdminEmpleado;
