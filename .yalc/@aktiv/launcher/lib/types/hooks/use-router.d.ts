export declare type UseRouterReturns = {
    redirect(path: string, state?: UseRouterState): void;
    replace(path: string, state?: UseRouterState): void;
};
export declare type UseRouterState = Partial<Record<string, unknown>>;
declare function useRouter(): UseRouterReturns;
export default useRouter;
//# sourceMappingURL=use-router.d.ts.map