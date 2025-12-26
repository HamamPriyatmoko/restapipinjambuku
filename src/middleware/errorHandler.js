import { generateTraceId } from '../utils/generateTraceId.js';

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    message: err.message || 'Internal Server Error',
    ziyad_error_code: err.code || 'ZYD-ERR-500',
    trace_id: err.traceId || generateTraceId(),
  });
};
