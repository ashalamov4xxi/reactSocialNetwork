import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormControl/FormControl";
import {required} from "../Utilites/Validation/Validation";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} validate={required} name="login"/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} validate={required} name="password"/>
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

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

export default Login