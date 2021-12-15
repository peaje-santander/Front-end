import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {loginUser} from '@store/reducers/auth';
import {Button, Checkbox, Input} from '@components';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

import * as AuthService from '../../services/auth';

const Register = () => {
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const history = useHistory();

    const register = async (email, password) => {
        try {
            setAuthLoading(true);
            const token = await AuthService.registerByAuth(email, password);
            setAuthLoading(false);
            dispatch(loginUser(token));
            toast.success('Registration is success');
            history.push('/');
        } catch (error) {
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
            setAuthLoading(false);
        }
    };
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            idDocumento: '',
            celular: '',
            email: '',
            password: '',
            passwordRetype: ''
        },
        validationSchema: Yup.object({
            celular: Yup.string().required('Campo obligatorio '),
            apellido: Yup.string().required('Campo obligatorio '),
            idDocumento: Yup.string().required('Campo obligatorio '),
            nombre: Yup.string().required('Campo obligatorio '),
            email: Yup.string()
                .email('Email inválido')
                .required('Campo obligatorio '),
            password: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Campo obligatorio '),
            passwordRetype: Yup.string()
                .min(5, 'Debe tener al menos 5 caracteres')
                .max(30, 'Debe tener menos de 30 caracteres')
                .required('Campo obligatorio ')
                .when('password', {
                    is: (val) => !!(val && val.length > 0),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Las contraseñas deben ser iguales'
                    )
                })
        }),
        onSubmit: (values) => {
            register(values.email, values.password);
        }
    });

    document.getElementById('root').classList = 'hold-transition register-page';

    return (
        <div className="register-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>Peajes</b>
                        <span>Santander</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">{t('register.registerNew')}</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <Input
                                type="text"
                                placeholder="Nombre"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'nombre'
                                )}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="text"
                                placeholder="Apellido"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'apellido'
                                )}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="text"
                                placeholder="Número de documento"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'idDocumento'
                                )}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="tel"
                                placeholder="Número de teléfono"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'celular'
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <Input
                                type="email"
                                placeholder="Email"
                                icon={faEnvelope}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps('email')}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                icon={faLock}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'password'
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <Input
                                type="password"
                                placeholder="Repite la contraseña"
                                icon={faLock}
                                formik={formik}
                                formikFieldProps={formik.getFieldProps(
                                    'passwordRetype'
                                )}
                            />
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <Checkbox
                                    checked={false}
                                    label={
                                        <>
                                            <span>Acepto los </span>
                                            <Link to="/">
                                                términos y condiciones
                                            </Link>
                                        </>
                                    }
                                />
                            </div>
                            <div className="col-5">
                                <Button
                                    type="submit"
                                    block
                                    isLoading={isAuthLoading}
                                >
                                    {t('register.label')}
                                </Button>
                            </div>
                        </div>
                    </form>
                    <Link to="/login" className="text-center">
                        {t('register.alreadyHave')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
