import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import LogOut from './LogOut';

const style = {
  nav: `w-full h-20 flex justify-between items-center p-4 bg-slate-800 rounded-bl-lg rounded-br-lg shadow-xl sticky top-0`,
  heading: `text-3xl text-white font-serif font-bold`,
  navLink: `hidden sm:flex gap-4 items-center font-semibold font-serif`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className={style.nav}>
      <Link to="/">
        <h1 className={style.heading}>Abhishek.</h1>
      </Link>
      <div className={style.navLink}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>{user ? <LogOut /> : <SignIn />}</div>
    </nav>
  );
};

export default Navbar;
