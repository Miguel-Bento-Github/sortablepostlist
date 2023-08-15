/**
 * Thrown when an HTTP request responds with a client or server error status
 */
export class ResponseStatusError<Status extends number> extends Error {
  constructor(
    readonly status: Status,
    readonly code?: string,
    message?: string,
    options?: ErrorOptions
  ) {
    super(message, options);
    this.name = "ResponseStatusError";
  }
  /**
   * Creates a new `ResponseStatusError` from the given `Response`
   * @example
   * fetch(resource).then((response) => {
   *   if (!response.ok) {
   *    throw await ResponseStatusError.fromResponse(response);
   *  }
   * });
   */
  static async fromResponse(response: Response, options?: ErrorOptions) {
    let waveErrorCode: string | undefined;
    try {
      const body = await response.json();
      if ("code" in body && typeof body.code === "string") {
        waveErrorCode = body.code;
      }
    } catch {
      // could not parse JSON to set optional waveErrorCode, do not throw error
    }

    return new ResponseStatusError(
      response.status,
      waveErrorCode,
      `${response.status} ${response.statusText}`,
      {
        cause: response,
        ...options
      }
    );
  }
}
