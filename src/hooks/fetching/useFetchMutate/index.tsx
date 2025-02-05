import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import requestAuth from "../../../utils/requestAuth";
import { createUrl } from "../../../utils/createUrl";

const fetcher = ({ method, endpoint, param, params = {}, payload }) => {
  if (method === "POST") {
    return requestAuth.post(createUrl(endpoint, params, param), payload);
  }

  if (method === "PUT") {
    return requestAuth.put(createUrl(endpoint, params, param), payload);
  }

  if (method === "PATCH") {
    return requestAuth.patch(createUrl(endpoint, params, param), payload);
  }

  if (method === "DELETE") {
    return requestAuth.delete(createUrl(endpoint, params, param), {
      data: payload,
    });
  }
  return null;
};

const useFetchMutate = ({ key, method, endpoint, successFunc = () => { }, errorFunc = () => { } }: { key?: string; method?: string; endpoint: string; successFunc?: (data: any) => void; errorFunc?: (err: any) => void }) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ payload, param, params = {} }: { payload: any; param?: any; params?: object }) =>
      fetcher({ method, endpoint, param, params, payload }),
    {
      onSuccess: (data) => {
        if (key) queryClient.invalidateQueries(key);
        successFunc(data);
      },

      onError: (err: any) => {
        if (err?.status === 413) {
          toast.error("Fayllar hajmi oshib ketti")
        } else {
          errorFunc(err);
        }
        // / server errors notification
      },
    }
  );
};

export default useFetchMutate;
