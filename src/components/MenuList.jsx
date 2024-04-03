import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import LogOut from './LogOut';
import SignIn from './SignIn';

const style = {
  mobileMenu: `sm:hidden absolute top-20 right-0 w-52 bg-slate-900 h-56 rounded-l-3xl rounded-br-3xl py-2 z-56 flex flex-col items-center justify-between`,
};

const MenuList = ({ open, setOpen }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.mobileMenu}>
      <div className="flex flex-col gap-6 font-serif font-semibold">
        <Link onClick={() => setOpen(!open)} to="/">
          Home
        </Link>
        <Link onClick={() => setOpen(!open)} to="/projects">
          Projects
        </Link>
        <Link onClick={() => setOpen(!open)} to="/contact">
          Contact
        </Link>
      </div>
      <div className="block">{user ? <LogOut /> : <SignIn />}</div>
    </div>
  );
};

export default MenuList;
