import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormControl/FormControl";
import {required} from "../Utilites/Validation/Validation";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" component={Input} validate={required} name="email"/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} validate={required} name="password" type="password"/>
            </div>
            <div>
                <Field type="checkbox" component="input" name="rememberMe"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe )
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)