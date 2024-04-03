import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import LogOut from './LogOut';
import Menu from '../assets/hamburger.svg';
import { useState } from 'react';
import MenuList from './MenuList';

const style = {
  nav: `w-full h-20 flex justify-between items-center p-4 bg-slate-800 rounded-bl-lg rounded-br-lg shadow-xl sticky top-0`,
  heading: `text-3xl text-white font-serif font-bold`,
  navLink: `hidden sm:flex gap-4 items-center font-semibold font-serif`,
};

const Navbar = () => {
  const [open, setOpen] = useState(false)

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
      <div className="hidden sm:block">{user ? <LogOut /> : <SignIn />}</div>
      <img
        src={Menu}
        alt="menu-icon"
        width={20}
        className="sm:hidden block cursor-pointer z-20"
        onClick={() => setOpen(!open)}
      />
      {open && <MenuList open={open} setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;
