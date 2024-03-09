import { useState } from 'react';
import emailjs from '@emailjs/browser';

const style = {
  form: `flex flex-col gap-2 sm:gap-5`,
  input: `py-2 bg-transparent border-b focus:outline-none font-serif`,
  send: `text-left px-4 py-2 bg-slate-900 w-fit rounded-lg shadow-xl font-serif`,
  error: `text-xs text-rose-500 font-mono`,
};

const ContactForm = () => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm('service_vdivr29', 'template_vmnetpt', form, {
        publicKey: 'UtJj29bUDh4zDfUFr',
      })
      .then(() => {
        console.log('success');
        alert('Successfully send your message');
        form.reset();
        setError(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <label className="flex flex-col gap-2 justify-center font-serif text-slate-300">
          <span>Your Name</span>
          <input type="text" name="name" className={style.input} min="3" />
        </label>
        <label className="flex flex-col gap-2 justify-center font-serif text-slate-300">
          <span>Your Email</span>
          <input type="email" name="email" className={style.input} />
        </label>
      </div>
      <label className="flex flex-col gap-2 justify-center font-serif text-slate-300">
        <span>Your Subject</span>
        <input type="text" name="subject" className={style.input} />
      </label>
      <label className="flex flex-col gap-2 justify-center font-serif text-slate-300">
        <span>Message</span>
        <textarea
          className={style.input}
          placeholder="Write here your message"
          name="message"
        ></textarea>
      </label>
      {error && <p className={style.error}>All fields are required</p>}
      <button type="submit" className={style.send}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
