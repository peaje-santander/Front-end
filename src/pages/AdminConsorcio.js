/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Table, SmallBox, Button, Input} from '@components';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const tracksData = [
    {
        name: 'Spa-Francorchamps',
        country: 'Belgium',
        length: 7.004,
        numberOfLaps: 44
    },
    {
        name: 'Circuit de Monaco',
        country: 'Monaco',
        length: 3.337,
        numberOfLaps: 78
    },
    {
        name: 'Silverstone',
        country: 'England',
        length: 5.891,
        numberOfLaps: 52
    },
    {
        name: 'Suzuka',
        country: 'Japan',
        length: 5.807,
        numberOfLaps: 53
    },
    {
        name: 'Hockenheimring',
        country: 'Germany',
        length: 4.574,
        numberOfLaps: 47
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
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
                                        type="info"
                                        icon="ion-android-people"
                                        navigateTo="/"
                                    />
                                </div>
                                <div className="col-sm-3 col-4">
                                    <SmallBox
                                        count={150}
                                        title="New Orders"
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
                                        'Name',
                                        'Country',
                                        'Length(km)',
                                        'Number of laps'
                                    ]}
                                    title="Top F1 tracks"
                                    breakOn="small"
                                />
                            </div>
                            <div className="comienzo">
                                <div className="card card-outline card-primary">
                                    <div className="card-header text-center" />
                                    <div className="card-body">
                                        <div className="row justify-content-evenly">
                                            <form
                                                onSubmit={formik.handleSubmit}
                                            >
                                                <div className="mb-3">
                                                    <label htmlFor="IdConsor">
                                                        Consorcio
                                                        <Input
                                                            placeholder="Nombre del Consorcio"
                                                            type="Text"
                                                            name="IdConsor"
                                                            formik={formik}
                                                            formikFieldProps={formik.getFieldProps(
                                                                'IdConsor'
                                                            )}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="IdConsor">
                                                        Descripcion
                                                        <Input
                                                            placeholder="Informacion del consorcio"
                                                            type="Text"
                                                            name="Info"
                                                            formik={formik}
                                                            formikFieldProps={formik.getFieldProps(
                                                                'Info'
                                                            )}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <Button
                                                            block
                                                            type="submit"
                                                        >
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
                </div>
            </section>
        </div>
    );
};

export default AdminConsorcio;
