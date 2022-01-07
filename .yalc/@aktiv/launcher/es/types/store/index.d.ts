import type { Store, ReducersMapObject, Middleware } from 'redux';
export type { ReducersMapObject, Store };
export declare const initialStore: (s: Store) => void;
export declare type StateType = Readonly<Record<string, unknown>>;
export declare type PayloadType = unknown;
export declare type ActionItem = {
    key: string;
    payload: (...arg: unknown[]) => unknown;
    handle?: (s: StateType, p: PayloadType) => unknown;
};
export declare type ActionsConfig = Record<string, ActionItem>;
export declare type ResultActionTypes = Record<string, (...arg: unknown[]) => unknown>;
export declare type ReducerConfigItem = {
    state: StateType;
    config: ActionsConfig;
};
export declare type ReducerConfig = Record<string, ReducerConfigItem>;
export declare const createActions: (actionsConfig: ActionsConfig) => ResultActionTypes;
export declare const createStore: (reducerConfig: ReducerConfig, reducer?: ReducersMapObject, reduxMiddleware?: Middleware[]) => Store;
//# sourceMappingURL=index.d.ts.map