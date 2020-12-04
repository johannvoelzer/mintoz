import PasswordForgetInput from '../styles/inputs/PasswordForgetInput';
import PasswordForgetButton from '../styles/buttons/PasswordForgetButton';

export default function PasswordForget() {
    return (
        <form>
            <PasswordForgetInput
                name="email"
                type="text"
                placeholder=" EMAIL"
            />
            <PasswordForgetButton type="submit">
                RESET
            </PasswordForgetButton>
        </form>
    )
}