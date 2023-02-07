import toast, { } from 'react-hot-toast'

// validate signup page 
export async function signupValidation(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    firstNameVerify(errors, values);

    return errors;
}

// validate login page username
export async function loginValidate(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);

    return errors;
}

// validate names
function firstNameVerify(error = {}, values) {
    if (!values.firstName && !values.lastName) {
        error.firstName = toast.error('firstName and lastName Required...!');
    } else if (values.firstName.includes('')) {
        error.firstName = toast.error('Invalid Name...!');
    }
    return error;
}

// validate password
function passwordVerify(error = {}, values) {
    if (!values.password) {
        error.password = toast.error('Password Required...!');
    } else if (values.password.includes('')) {
        error.password = toast.error('Wrong Password...!');
    }
    return error;
}

// validate username
function usernameVerify(error = {}, values) {

    if (!values.userName) {
        error.userName = toast.error('Username Required...!');
    } else if (values.userName.includes('')) {
        error.userName = toast.error('Invalid Username...!');
    }
    return error;
}