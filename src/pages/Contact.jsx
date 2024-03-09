import phoneIcon from '../assets/phone3.png';
import emailIcon from '../assets/email1.png';
import locationIcon from '../assets/location1.png';
import twitterIcon from '../assets/twitter2.svg';
import linkedInIcon from '../assets/linkedIn.svg';
import githubIcon from '../assets/github.svg';
import ContactForm from '../components/ContactForm';

const style = {
  contactContainer: `w-full mt-2 lg:h-[80vh] flex flex-col gap-8 items-center justify-center`,
  contactTitle: `text-3xl font-bold font-serif`,
  contactDesc: `font-base font-serif text-center text-slate-300 tracking-wider`,
  contactWrapper: `w-full lg:w-[1024px] bg-slate-800 rounded-lg shadow-xl p-4 flex flex-col lg:flex-row items-center justify-center mt-5`,
  contactLeft: `max-w-[350px] h-fit flex flex-col items-start bg-slate-700 rounded-lg shadow-xl p-4 gap-4`,
  leftTitle: `text-2xl font-semibold font-serif mb-2`,
  leftDesc: `text-base text-wrap font-normal font-serif mb-2 text-slate-300`,
  phone: `flex items-center gap-4 font-semibold font-serif mb-2`,
  email: `flex items-center gap-4 font-semibold font-serif mb-2`,
  leftIcons: `flex items-center gap-4`,
  location: `flex items-center gap-4 font-semibold font-serif mb-2`,
  contactRight: `sm:flex-1 mt-4 sm:mt-0 w-full flex items-center justify-center p-2`,
};

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <h1 className={style.contactTitle}>Get In Touch</h1>
      <p className={style.contactDesc}>
        Feel free to contact us any time. we will get back to you as soon as we
        can!
      </p>
      <div className={style.contactWrapper}>
        <div className={style.contactLeft}>
          <h2 className={style.leftTitle}>Contact information</h2>
          <p className={style.leftDesc}>
            Feel free to contact us any time. we will get back to you as soon as
            we can!
          </p>
          <div className={style.phone}>
            <span>
              <img src={phoneIcon} alt="phone Icon" width={20} height={20} />
            </span>
            <span>+91 8789503676</span>
          </div>
          <div className={style.email}>
            <span>
              <img src={emailIcon} alt="email icon" width={20} height={20} />
            </span>
            <span>abhi878950@gmail.com</span>
          </div>
          <div className={style.location}>
            <span>
              <img
                src={locationIcon}
                alt="location icon"
                width={20}
                height={20}
              />
            </span>
            <p>Patna, Bihar (India)</p>
          </div>
          <div className={style.leftIcons}>
            <a
              href="https://twitter.com/ABHISHEK8789501"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="twitter-Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-roy-b211a8231/"
              rel="noreferrer"
              target="_target"
            >
              <img src={linkedInIcon} alt="linkedin-Icon" />
            </a>
            <a
              href="https://github.com/abhishek-Roy22"
              rel="noreferrer"
              target="_target"
            >
              <img src={githubIcon} alt="github-Icon" />
            </a>
          </div>
        </div>
        <div className={style.contactRight}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
