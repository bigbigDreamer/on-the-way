import type { Dispatch as ReduxDispatch, AnyAction, MiddlewareAPI } from 'redux';
export default function promiseMiddleware({ dispatch }: MiddlewareAPI): (next: ReduxDispatch) => (action: AnyAction) => unknown;
//# sourceMappingURL=promiseMiddleware.d.ts.map