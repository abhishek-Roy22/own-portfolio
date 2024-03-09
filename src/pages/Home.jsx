import AbhiImg from '../assets/abhishek.jpg';
import DownloadButton from '../components/DownloadButton';
import react from '../assets/react-js.svg';
import Html from '../assets/html.svg';
import Css from '../assets/css.svg';
import JavaScript from '../assets/javascript.svg';
import Tailwind from '../assets/tailwind-css.svg';
import firebaseIcon from '../assets/firebase.svg';

const style = {
  main: `w-full h-[85vh] mt-4 px-4 flex flex-col-reverse sm:flex-row bg-slate-800 rounded-lg shadow-xl overflow-hidden`,
  bio: `flex-1 w-full flex flex-col justify-center gap-4 p-4 relative`,
  title: `text-2xl sm:text-4xl font-bold font-serif`,
  disc: `font-serif tracking-wide text-left text-sm sm:text-base text-wrap leading-5`,
  icons: `hidden lg:flex gap-4 items-center absolute bottom-0`,
  icon: `hover:-translate-y-4 delay-150 transition-all cursor-pointer`,
  img: `flex-1 w-full bg-center object-fit lg:rounded-full flex items-center justify-content overflow-hidden`,
};

const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.bio}>
        <h2 className={style.title}>
          Hi, <br /> I'm Abhishek Kumar
        </h2>
        <p className={style.disc}>
          👋A passionate developer diving into the world of web development.
          With a strong foundation in HTML, CSS, and JavaScript, I craft
          beautiful and responsive websites. 🚀 Currently, I'm exploring the
          realms of React.js, Tailwind CSS, and Firebase, constantly seeking new
          challenges to enhance my skills.💡
        </p>
        <DownloadButton />
        <div className={style.icons}>
          <img className={style.icon} src={Html} alt="Html-icon" />
          <img className={style.icon} src={Css} alt="css-icon" />
          <img className={style.icon} src={JavaScript} alt="javascript-icon" />
          <img className={style.icon} src={react} alt="react-icon" />
          <img className={style.icon} src={Tailwind} alt="tailwind-icon" />
          <img className={style.icon} src={firebaseIcon} alt="firebase-icon" />
        </div>
      </div>
      <div className={style.img}>
        <img src={AbhiImg} alt="own-img" />
      </div>
    </main>
  );
};

export default Home;
