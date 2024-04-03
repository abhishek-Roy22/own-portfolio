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
      <GoogleButton label="Google"
        style={{
          width: '150px',
          borderRadius: '4px',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          cursor: 'pointer',
        }} onClick={handleClick} />
    </div>
  );
};

export default SignIn;
