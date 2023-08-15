import { ResponseStatusError } from "../errors/ResponseStatusError";

/**
 * The browser's native `fetch` API is encapsulated by this wrapper.
 * In contrast to the native `fetch`, this wrapper **does** trigger a rejection when confronted with an HTTP error status.
 * This capability enables targeted `catch` statements for specific statuses.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export const apiFetch = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw await ResponseStatusError.fromResponse(response);
  }
  return response;
};
