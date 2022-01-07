import type { RouteItem } from './app';
import type { Store, ReducerConfig, ReducerConfigItem } from '../store';
import type { ReactElement } from 'react';
export declare type PluginInnerRenderType = (children: ReactElement, route: RouteItem, opt?: PluginOpt) => ReactElement;
export declare type PluginOuterRenderType = (children: ReactElement, opt?: PluginOpt) => ReactElement;
export interface Plugin {
    name: string;
    outer?: PluginOuterRenderType;
    inner?: PluginInnerRenderType;
    reducerConfig?: ReducerConfigItem;
}
export interface PluginOpt {
    pluginSortIndex?: number;
    reducerConfig?: ReducerConfigItem;
    [x: string]: unknown;
}
interface PluginItem {
    opt?: PluginOpt;
    plugin: Plugin;
}
interface WrapperInitPropsType {
    hash?: boolean;
    routes: Array<RouteItem>;
    store: Store | null;
    routerBasePath?: string;
}
export declare const pluginReducers: ReducerConfig;
export declare function pluginsRegistry(item: PluginItem): void;
declare const WrapperInit: ({ hash, routes, store, routerBasePath, }: WrapperInitPropsType) => JSX.Element;
export default WrapperInit;
//# sourceMappingURL=wrapperInit.d.ts.map