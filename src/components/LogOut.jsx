import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const style = {
  button: `p-4 w-fit bg-slate-900 text-slat-100 border-none outline-none rounded-lg font-serif`,
};

const handleClick = () => {
  signOut(auth);
};

const LogOut = () => {
  return (
    <button className={style.button} onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogOut;
