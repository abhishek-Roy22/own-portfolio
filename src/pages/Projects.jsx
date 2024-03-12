import ProjectList from '../components/ProjectList';
import useFetch from '../hooks/useFetch';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  projectContainer: `w-full mt-4 flex flex-col gap-5`,
  error: `text-center text-3xl text-rose-600 font-serif font-bold`,
  loading: `text-center text-3xl text-teal-500 font-serif font-bold`,
};

const Projects = () => {
  const [user] = useAuthState(auth);

  const { data, error, isLoading } = useFetch('https://abhishek-roy22.github.io/projects-data/db.json');

  if (!user) {
    return <p className={style.error}>Sorry, But you are not logged In:)</p>
  }

  return (
    <div className={style.projectContainer}>
      {error && <p className={style.error}>{error}</p>}
      {isLoading && <p className={style.loading}>Loading...</p>}
        {data && <ProjectList projects={data.products} />}
    </div>
  );
};

export default Projects;
