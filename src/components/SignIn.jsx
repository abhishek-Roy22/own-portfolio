import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const handleClick = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const SignIn = () => {
  return (
    <div>
      <GoogleButton onClick={handleClick} />
    </div>
  );
};

export default SignIn;
