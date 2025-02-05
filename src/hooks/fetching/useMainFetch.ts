import { useQuery } from "react-query";
import requestAuth, { baseURL } from "../../utils/requestAuth";

// searchParams is object
// example: {
//            page: 2,
//            search: "string"
//          }
const generateUrl = (endpoint, searchParams) => {
  let url = `${baseURL}${endpoint}`;

  Object.keys(searchParams).forEach(key => {
    if (searchParams[key] === undefined || searchParams[key] === null) {
      delete searchParams[key];
    }
  })

  const paramKeys = Object.keys(searchParams);

  if (!paramKeys?.length) { return url; }

  paramKeys.forEach((key, index) => {
    url += `${index === 0 ? "?" : "&"}${key}=${searchParams[key]}`;
  });

  return url;
};

const useMainFetch = ({ key, endpoint, options, method = "get", searchParams = {}, generateData = (val) => val }:
  { key: string, endpoint: string, options?: object; method?: string, searchParams?: object; generateData?: (data: any) => any }) => {

  const transformedParams = generateUrl(endpoint, searchParams);

  return useQuery(
    [key, { ...searchParams }],
    () => requestAuth[method](transformedParams).then(data => generateData(data)),
    { ...options },
  )
};

export default useMainFetch;