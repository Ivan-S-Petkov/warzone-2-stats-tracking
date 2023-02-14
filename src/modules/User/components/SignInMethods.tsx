import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Alternatives } from './common.styled'
import { providerSignIn } from "../utils/firebase";
import { AppContext } from 'src/Providers/global';

function SignInMethods() {

    const { setMenuError } = useContext(AppContext);

    const providerHandler = (e: any, provider: string) => {
        e.preventDefault();
        providerSignIn(provider).then((res) => {
            if (res) {
                let name = 'Error';
                let message = res.replace('Firebase: Error ', '');
                setMenuError({ name, message });
            }
        });
    }

    return (
        <Alternatives>
            <FontAwesomeIcon onClick={(e) => providerHandler(e, 'facebook')} icon={faFacebookSquare} />
            <FontAwesomeIcon onClick={(e) => providerHandler(e, 'google')} icon={faGoogle} />
            <FontAwesomeIcon onClick={(e) => providerHandler(e, 'twitter')} icon={faTwitterSquare} />
        </Alternatives>
    )
}

export default SignInMethods