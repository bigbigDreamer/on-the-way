import type { ReducerConfig, ReducersMapObject } from '../store';
import type { ComponentType } from 'react';
import type { Plugin, PluginOpt } from './wrapperInit';
import type { Middleware } from 'redux';
export interface RouteItemBase {
    path?: string;
    casessensitive?: boolean;
    children?: Array<RouteItem>;
    lazy?: boolean;
    title?: string;
}
export interface RedirectRouteItem extends RouteItemBase {
    redirect: string;
}
export interface NormalRouteItem extends RouteItemBase {
    component: ComponentType | (() => DynamicImportType);
}
export interface ParentRedirectRoteItem extends RouteItemBase {
    redirect: string;
    component: ComponentType | (() => DynamicImportType);
}
export declare type DynamicImportType = Promise<{
    default: ComponentType;
}>;
export interface RouteItem extends RouteItemBase {
    redirect?: string;
    component?: ComponentType | (() => DynamicImportType);
    [x: string]: unknown;
}
export interface ConstructorOptionsType {
    hash?: boolean;
    routes: Array<RouteItem>;
    reducerConfig?: ReducerConfig;
    reducers?: ReducersMapObject;
    immerEnableES5?: boolean;
    routerBasePath?: string;
    rootNode?: string;
    reduxMiddleware?: Middleware[];
}
export default class {
    options: ConstructorOptionsType;
    constructor(params: ConstructorOptionsType);
    start(): void;
    use(plugin: Plugin, opt?: PluginOpt): void;
}
//# sourceMappingURL=app.d.ts.map