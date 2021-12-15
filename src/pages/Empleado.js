/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Swal from 'sweetalert2';
import {useFormik} from 'formik';
import {Button, Input} from '@components';

import * as Yup from 'yup';

const Movimientos = () => {
    const formik = useFormik({
        initialValues: {
            Placa: ' ',
            Nombre: ''
        },
        validationSchema: Yup.object({
            Placa: Yup.string()
                .min(6, 'Debe tener al menos 5 caracteres')
                .max(6, 'Debe tener menos de 30 caracteres')
                .required('Obligatorio ')
        }),
        onsubmit: (values) => {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            });

            // eslint-disable-next-line no-console
            console.log(values.Placa);

            return <h1>{values.placa}</h1>;
        }
    });
    return (
        <div>
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <div>
                                    <label
                                        htmlFor="Placa"
                                        className="form-label"
                                    >
                                        Placa
                                        <Input
                                            name="Placa"
                                            type="Text"
                                            placeholder="asd 543"
                                            formik={formik}
                                            formikFieldProps={formik.getFieldProps(
                                                'Placa'
                                            )}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <select name="sel" className="form-select">
                                        <option value="AAA">AAA</option>
                                    </select>
                                </div>
                                <div>
                                    <Button block type="submit">
                                        A
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Movimientos;
