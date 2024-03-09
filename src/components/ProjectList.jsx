import React from 'react';

const style = {
  projectWrapper: `w-full flex flex-col gap-4 sm:gap-0 sm:flex-row p-4 overflow-hidden items-center bg-slate-800 rounded-lg shadow-xl`,
  leftContainer: `flex-1 w-full p-4 space-y-5`,
  title: `text-2xl font-semibold font-serif tracking-wide text-slate-100`,
  desc: `list-disc leading-6`,
  list: `text-base font-normal font-serif text-slate-400 ml-4`,
  link: `underline text-sky-500 mr-2 inline-block hover:text-sky-600 font-serif font-semiblod`,
  github: `px-3 py-2 border rounded-lg font-semibold font-serif hover:bg-slate-900 hover:text-slate-100`,
  rightContainer: `flex-1 w-full h-full mb-2 sm:mb-0 rounded-tl-lg rounded-br-lg overflow-hidden shadow-xl hover:rounded-lg`,
  image: `w-full h-full object-contain bg-cover`,
};

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className={style.projectWrapper}>
          <div className={style.leftContainer}>
            <h1 className={style.title}>{project.title}</h1>
            <ul className={style.desc}>
              {project.description.map((desc, i) => (
                <li className={style.list} key={i}>
                  {desc}
                </li>
              ))}
            </ul>
            <a
              className={style.link}
              target="_blank"
              rel="noreferrer"
              href={project.demo_link}
            >
              Live link ↗
            </a>
            <a
              className={style.github}
              rel="noreferrer"
              target="_blank"
              href={project.github_link}
            >
              GitHub
            </a>
          </div>
          <div className={style.rightContainer}>
            <img
              className={style.image}
              src={project.image}
              alt="websiteApplication"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
