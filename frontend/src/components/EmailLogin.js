import FormInput from '../styles/inputs/FormInput';
import LoginButton from '../styles/buttons/LoginButton';

export default function EmailLogin() {
    return (
        <form>
        <div>
          <FormInput
            name="email"
            type="text"
            placeholder=" EMAIL"
          />
        <div>
        </div>
          <FormInput
            name="password"
            type="password"
            placeholder=" PASSWORD"
          />
        </div>
          <LoginButton type="submit">
            LOGIN
          </LoginButton>
      </form>
    )
}