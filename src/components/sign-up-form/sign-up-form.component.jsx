import { useState } from "react";

import { createUserDataWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultFieldValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

    const [fieldValues, setFieldValues] = useState(defaultFieldValues);

    const {displayName, email, password, confirmPassword} = fieldValues;

    // console.log(fieldValues)

    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(name, value)

        setFieldValues({...fieldValues, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Your passwords do not match, try again");
            return;
        }

        try{
            const {user} = await createUserDataWithEmailAndPassword(email, password);
            const objCreated = {...user, displayName};
            // console.log(objCreated)
            await createUserDocumentFromAuth(objCreated);
        }catch(err){
            console.log("User creation encountered error", err);
        }

    }

    return(
        <div className="sign-up-container">

            <h2>Don't have an account?</h2>

            <span>Sign up with your email and password.</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text" 
                    onChange={handleChange} 
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email" 
                    onChange={handleChange} 
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm password"
                    type="password" 
                    onChange={handleChange} 
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>

            </form>

        </div>
    )
}

export default SignUpForm;