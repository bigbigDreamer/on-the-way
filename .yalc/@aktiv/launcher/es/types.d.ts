import type { ComponentType } from 'react';
import type { ForwardRefExoticComponent } from 'react';
import type { Location as Location_2 } from 'react-router';
import type { Middleware } from 'redux';
import type { Params } from 'react-router-dom';
import type { PropsWithoutRef } from 'react';
import type { ReactElement } from 'react';
import type { ReducersMapObject } from 'redux';
import type { RefAttributes } from 'react';

export declare type ActionItem = {
    key: string;
    payload: (...arg: unknown[]) => unknown;
    handle?: (s: StateType, p: PayloadType) => unknown;
};

export declare type ActionsConfig = Record<string, ActionItem>;

export declare interface ConstructorOptionsType {
    hash?: boolean;
    routes: Array<RouteItem>;
    reducerConfig?: ReducerConfig;
    reducers?: ReducersMapObject;
    immerEnableES5?: boolean;
    routerBasePath?: string;
    rootNode?: string;
    reduxMiddleware?: Middleware[];
}

export declare const createActions: (actionsConfig: ActionsConfig) => ResultActionTypes;

declare class {
    options: ConstructorOptionsType;
    constructor(params: ConstructorOptionsType);
    start(): void;
    use(plugin: Plugin_2, opt?: PluginOpt): void;
}
export default default_2;

export declare type DynamicImportType = Promise<{
    default: ComponentType;
}>;

export declare type HocExtraProps = {
    location: Location_2;
    params: Params;
    history: {
        go: typeof history.go;
        goBack: typeof history.back;
        goForward: typeof history.forward;
        location: Location_2;
        push: UseRouterReturns['redirect'];
        replace: UseRouterReturns['replace'];
    };
};

export declare type PayloadType = unknown;

declare interface Plugin_2 {
    name: string;
    outer?: PluginOuterRenderType;
    inner?: PluginInnerRenderType;
    reducerConfig?: ReducerConfigItem;
}
export { Plugin_2 as Plugin }

export declare type PluginInnerRenderType = (children: ReactElement, route: RouteItem, opt?: PluginOpt) => ReactElement;

export declare interface PluginOpt {
    pluginSortIndex?: number;
    reducerConfig?: ReducerConfigItem;
    [x: string]: unknown;
}

export declare type PluginOuterRenderType = (children: ReactElement, opt?: PluginOpt) => ReactElement;

export declare type ReducerConfig = Record<string, ReducerConfigItem>;

export declare type ReducerConfigItem = {
    state: StateType;
    config: ActionsConfig;
};

export declare type ResultActionTypes = Record<string, (...arg: unknown[]) => unknown>;

export declare interface RouteItem extends RouteItemBase {
    redirect?: string;
    component?: ComponentType | (() => DynamicImportType);
    [x: string]: unknown;
}

export declare interface RouteItemBase {
    path?: string;
    casessensitive?: boolean;
    children?: Array<RouteItem>;
    lazy?: boolean;
    title?: string;
}

export declare type StateType = Readonly<Record<string, unknown>>;

export declare function useRouter(): UseRouterReturns;

export declare type UseRouterReturns = {
    redirect(path: string, state?: UseRouterState): void;
    replace(path: string, state?: UseRouterState): void;
};

export declare type UseRouterState = Partial<Record<string, unknown>>;

export declare function withRouter<CProps, R>(Com: ComponentType<CProps & HocExtraProps>): ForwardRefExoticComponent<PropsWithoutRef<CProps> & RefAttributes<R>>;


export * from "immer";
export * from "react-redux";
export * from "react-router";
export * from "react-router-dom";
export * from "redux";

export { }
