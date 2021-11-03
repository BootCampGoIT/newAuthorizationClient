import React, { useContext } from "react";
import { AuthFormStyled } from "./AuthFormStyled";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validation/Validator";

import {
  signInOperation,
  signUpOperation,
} from "../../redux/auth/authOperations";
import { LangContext } from "../App";
import { resetAuthError } from "../../redux/auth/authActions";

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { language } = useContext(LangContext);
  const authError = useSelector((state) => state.auth.authError);

  return (
    <AuthFormStyled>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (location.pathname === "/signup") {
            dispatch(signUpOperation(values));
          } else {
            dispatch(signInOperation(values));
          }
        }}>
        {({ values, errors, touched, handleBlur }) => (
          <Form className='authForm'>
            <label className='authFormLabel'>
              {language.authForm.email}
              <Field
                type='text'
                name='email'
                placeholder='Andrii@gmail.com'
                value={values.email}
                onInput={() => {
                  authError && dispatch(resetAuthError());
                }}
                className={
                  !values.email.length && touched.email && errors.email
                    ? "invalidInput"
                    : "authFormInput"
                }
              />
              {errors.email && touched.email ? (
                <p className='error'>{language.authValidation[errors.email]}</p>
              ) : null}
              {authError && (
                <p className='error'>{language.authForm[authError]}</p>
              )}
            </label>
            <label className='authFormLabel'>
              {language.authForm.password}

              <Field
                type='password'
                name='password'
                value={values.password}
                placeholder='Qwerty123'
                onBlur={handleBlur}
                onInput={() => {
                  authError && dispatch(resetAuthError());
                }}
                className={
                  !values.password.length && touched.password && errors.password
                    ? "invalidInput"
                    : "authFormInput"
                }
              />
              {errors.password && touched.password ? (
                <p className='error'>
                  {language.authValidation[errors.password]}
                </p>
              ) : null}
            </label>

            {location.pathname === "/signin" ? (
              <button type='submit' className='authFormButton'>
                {language.authForm.signIn}
              </button>
            ) : (
              <button type='submit' className='authFormButton'>
                {language.authForm.signUp}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </AuthFormStyled>
  );
};

export default AuthForm;
