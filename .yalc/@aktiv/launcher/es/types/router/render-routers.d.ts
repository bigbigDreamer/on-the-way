import { ReactElement, ReactNode } from 'react';
import type { RouteItem } from '../module/app';
declare type PluginRenderType = (w: ReactElement, r: RouteItem) => ReactElement;
declare const renderRoutes: (routes: Array<RouteItem> | undefined, pluginRender: PluginRenderType) => Array<ReactNode>;
export default renderRoutes;
//# sourceMappingURL=render-routers.d.ts.map