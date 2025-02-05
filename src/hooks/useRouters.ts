import { useNavigate, useSearchParams } from "react-router-dom"


const useRouters = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // * 1
  const query = Object.fromEntries(searchParams.entries());

  // * 2
  const clearQueries = () => {
    setSearchParams({});
  }

  // * 3
  const setQueries = (obj: object) => {
    setSearchParams({ ...query, ...obj });
  }

  // * 4
  const removeQuery = (...props: string[]) => {
    const newQuriesObj = { ...query };

    props.forEach(item => {
      delete newQuriesObj[item];
    })

    setSearchParams(newQuriesObj);
  };

  // * 5
  const navigateTo = (path: string) => {
    navigate(path);
  }


  return {
    query,  // * 1
    clearQueries,  // * 2
    setQueries,  // * 3
    removeQuery, // * 4
    navigateTo, // * 5
  }
};

export default useRouters;