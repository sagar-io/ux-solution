import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import * as ROUTES from "../../../constants/routes";
import FirebaseContext from '../../../context/firebaseContext';
import googleImg from '../../../assets/images/google.svg'

const SignIn = () => {
    const firebase: any = useContext(FirebaseContext);
    if (!firebase) {
        return;
    }

    const navigate = useNavigate();
    return (
        <div className='sign-in-wrapper'>
            <h2>SignIn</h2>
            <div className='center'>
                <button onClick={handleSignIn}>
                    <img src={googleImg} />
                    Continue With Google
                </button>
            </div>
        </div>
    )

    async function handleSignIn(e: any) {
        e.preventDefault()
        await firebase?.signInWithGoogle()
        navigate(ROUTES.LANDING)
    }
}

export default SignIn