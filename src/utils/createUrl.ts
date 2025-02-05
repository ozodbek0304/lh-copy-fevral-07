import qs from "query-string";
import { filterParams } from "./filterParams";

export const createUrl = (endpoint = "", params = {}, param = "") => {
    return `${endpoint}${param ? `/${param}` : ''}${Object.keys(filterParams(params)).length > 0 ? `?${qs.stringify(filterParams(params), { arrayFormat: 'index' })}` : ''}`
} 