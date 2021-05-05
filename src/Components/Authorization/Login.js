import React from "react";
import {Formik} from "formik";
import * as yup from 'yup'

import './Login.css'


const Login = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    })


    return (
        <div className='formik'>
            <Formik
                initialValues={{
                    name: "",
                    password: '',
                }}

                validatorOnBlur
                onSubmit={(values) => {console.log(values) }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <p>
                            <label htmlFor={'name'}>Имя</label><br/>
                            <input
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}/>
                        </p>
                        { touched.name && errors.name && <p>{errors.name}</p> }

                        <p>
                            <label htmlFor={'password'}>Пароль</label><br/>
                            <input
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}/>
                        </p>
                        { touched.password && errors.password && <p>{errors.password}</p> }

                            <button
                                disabled={!isValid && !dirty}
                                type={'submit'}
                                onClick={handleSubmit}>Отправить</button>

                        <p>
                            <label htmlFor="checkbox">Запомнить меня</label><br/>
                            <input type="checkbox" />
                        </p>

                        </div>
                )}

            </Formik>


        </div>
    )
}

export default Login