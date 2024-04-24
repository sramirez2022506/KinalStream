import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"
import {
    validatePasswordConfirm,
    validatePasswordConfirmMessage,
    validateUsername,
    validateUsernameMessage,
    emailValidationMessage,
    validatePasswordMessage,
    validateEmail,
    validatePassword
} from '../shared/validators'
import { useRegister } from "../shared/hooks/useRegister"

export const Register = ({ switchAuthHandler }) => {
    const {register, isLoading} = useRegister()

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid:false,
            showError:false
        },
        password: {
            value: '',
            isValid:false,
            showError:false
      },
      username: {
        value: '',
        isValid: false,
        showError:false
      },
      passwordConfirm: {
        value: '',
        isValid: false,
        showError: false
      }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formState.password.value, value);
                break;
            case 'username':
                isValid = validateUsername(value);
            break;
          default:
            break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    };

    const handleRegister = (event) => {
      event.preventDefault();
      console.log(formState)

        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid || !formState.username.isValid || !formState.passwordConfirm.isValid

    return (
        <div className="login-container">
            <Logo text={'Login Kinal Leveling'} />
            <form className="auth-form">
                <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
          />
                  <Input
                    field='username'
                    label='Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validateUsernameMessage}
          />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
          />
               <Input
                    field='passwordConfirm'
                    label='Password Confirmation'
                    value={formState.passwordConfirm.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConfirm.showError}
                    validationMessage={validatePasswordConfirmMessage}
          />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ¿You alredy have a account? Log in now
            </span>
          </div>
      )
};

