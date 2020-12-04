import FormInput from '../styles/inputs/FormInput';
import LoginButton from '../styles/buttons/LoginButton';

export default function RegisterForm() {
    return (
        <form>
            <div>  
                <FormInput
                    name="username"
                    type="text"
                    placeholder=" NAME"
                />
            </div>
            <div>
                <FormInput
                    name="email"
                    type="text"
                    placeholder=" EMAIL"
                />
            </div>
            <div>
                <FormInput
                    name="passwordOne"
                    type="password"
                    placeholder=" PASSWORD"
                />
            </div>
            <div>
                <FormInput
                    name="passwordTwo"
                    type="password"
                    placeholder=" CONFIRM PASSWORD"
                />
            </div>
            <LoginButton type="submit">REGISTER</LoginButton>
        </form>
    )
};