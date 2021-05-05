import React from "react";
import {Formik} from "formik";
import * as yup from 'yup'

import './Authorization.css'


const Authorization = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
        email: yup.string().email('Введите верный Email').required('Обязательно'),
        confirmEmail: yup.string().email('Введите верный Email').oneOf([yup.ref('email')], 'Email Не совпадают').required('Обязательно'),
    })


    return (
        <div className='formik'>
            <Formik
                initialValues={{
                    name: "",
                    secondName: "",
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: ""
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
                            <label htmlFor={'secondName'}>Фамилия</label><br/>
                            <input
                                type={'text'}
                                name={'secondName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}/>
                        </p>
                        { touched.secondName && errors.secondName && <p>{errors.secondName}</p> }

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

                        <p>
                            <label htmlFor={'confirmPassword'}>Подтверждение пароля</label><br/>
                            <input
                                type={'password'}
                                name={'confirmPassword'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}/>
                        </p>
                        { touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p> }

                        <p>
                            <label htmlFor={'confirmPassword'}>Email</label><br/>
                            <input
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}/>
                        </p>
                        { touched.email && errors.email && <p>{errors.email}</p> }

                        <p>
                            <label htmlFor={'confirmEmail'}>Подтвердить Email</label><br/>
                            <input
                                type={'email'}
                                name={'confirmEmail'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}/>
                        </p>
                        { touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p> }

                        <button
                            disabled={!isValid && !dirty}
                            type={'submit'}
                            onClick={handleSubmit}>Отправить</button>
                    </div>
                )}

            </Formik>


        </div>
    )
}

export default Authorization