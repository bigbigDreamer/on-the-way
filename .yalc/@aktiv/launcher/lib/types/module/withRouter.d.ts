import type { Params } from 'react-router-dom';
import type { Location } from 'react-router';
import type { UseRouterReturns } from '../hooks';
import type { ComponentType, PropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';
export declare type HocExtraProps = {
    location: Location;
    params: Params;
    history: {
        go: typeof history.go;
        goBack: typeof history.back;
        goForward: typeof history.forward;
        location: Location;
        push: UseRouterReturns['redirect'];
        replace: UseRouterReturns['replace'];
    };
};
export declare type AktivHistory = {
    go(): void;
    go(delta?: number): void;
    goBack(): void;
    goForward(): void;
};
declare function withRouter<CProps, R>(Com: ComponentType<CProps & HocExtraProps>): ForwardRefExoticComponent<PropsWithoutRef<CProps> & RefAttributes<R>>;
export default withRouter;
//# sourceMappingURL=withRouter.d.ts.map