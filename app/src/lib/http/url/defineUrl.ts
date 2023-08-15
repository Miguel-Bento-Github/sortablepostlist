import { Endpoint, URL } from "../types";

/**
 * Combines a given `endpoint` with the `/api` route prefix to create a URL.
 */
export const defineUrl = (endpoint: Endpoint): `${URL}${Endpoint}` => {
  return `${URL.placeholder}${endpoint}`;
};
