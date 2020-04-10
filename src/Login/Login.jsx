import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormControl/FormControl";
import {required} from "../Utilites/Validation/Validation";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../../src/components/common/FormControl/FormControl.module.css"


const LoginForm = (props) => {
    return (
        <div className={style.loginBlock}>
            <form onSubmit={props.handleSubmit} className={style.loginFormBlock}>
                <div>
                    <Field placeholder="Email" component={Input} validate={required} name="email" />
                </div>
                <div>
                    <Field placeholder="Password" component={Input} validate={required} name="password"
                           type="password"/>
                </div>
                <div>
                    <Field type="checkbox" component="input" name="rememberMe"/> Remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button className={style.buttonLogin}>Log in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1 className={style.nameBlock}>Please enter username and password</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)