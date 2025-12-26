import { generateTraceId } from '../utils/generateTraceId.js';

class ResponseError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code;
    this.traceId = generateTraceId();
  }
}

export { ResponseError };
