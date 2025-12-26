import { generateTraceId } from '../utils/genereteTraceId.js';

class ResponseError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code;
    this.traceId = generateTraceId();
  }
}

export { ResponseError };
