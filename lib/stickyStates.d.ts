import { UIRouter, StateOrName, StateDeclaration, PathNode, UIRouterPluginBase, HookMatchCriteria, TransitionStateHookFn, HookRegOptions } from "@uirouter/core";
declare module "@uirouter/core/lib/state/interface" {
    interface StateDeclaration {
        sticky?: boolean;
        onInactivate?: TransitionStateHookFn;
        onReactivate?: TransitionStateHookFn;
    }
}
declare module "@uirouter/core/lib/state/stateObject" {
    interface StateObject {
        sticky?: boolean;
        onInactivate?: TransitionStateHookFn;
        onReactivate?: TransitionStateHookFn;
    }
}
declare module "@uirouter/core/lib/transition/transitionService" {
    interface TransitionService {
        onInactivate: (criteria: HookMatchCriteria, callback: TransitionStateHookFn, options?: HookRegOptions) => Function;
        onReactivate: (criteria: HookMatchCriteria, callback: TransitionStateHookFn, options?: HookRegOptions) => Function;
    }
}
declare module "@uirouter/core/lib/transition/interface" {
    interface TransitionOptions {
        exitSticky: StateOrName[] | StateOrName;
    }
    interface TreeChanges {
        inactivating?: PathNode[];
        reactivating?: PathNode[];
    }
    interface IMatchingNodes {
        inactivating: PathNode[];
        reactivating: PathNode[];
    }
    interface PathTypes {
        inactivating: PathType;
        reactivating: PathType;
    }
    interface HookMatchCriteria {
        /** A [[HookMatchCriterion]] to match any state that would be inactivating */
        inactivating?: HookMatchCriterion;
        /** A [[HookMatchCriterion]] to match any state that would be reactivating */
        reactivating?: HookMatchCriterion;
    }
}
export declare class StickyStatesPlugin extends UIRouterPluginBase {
    router: UIRouter;
    name: string;
    private _inactives;
    private pluginAPI;
    constructor(router: UIRouter);
    inactives(): StateDeclaration[];
    private _addCreateHook();
    private _defineStickyPaths();
    private _defineStickyEvents();
    private _addStateCallbacks();
    private _calculateExitSticky(tc, trans);
    private _calculateStickyTreeChanges(trans);
    private _addDefaultTransitionOption();
    /**
     * Exits inactive sticky state(s)
     *
     * #### Example:
     * ```js
     * $stickyState.exitSticky('inactivestate');
     * ```
     *
     * ```js
     * $stickyState.exitSticky([ 'inactivestate1', 'inactivestate2' ]);
     * ```
     *
     * ```js
     * // exit all inactive stickies
     * $stickyState.exitSticky();
     * ```
     *
     * ```js
     * // exit all inactive stickies
     * $stickyState.exitSticky($stickyState.inactives());
     * ```
     * @param states The state name, or an array of state names
     */
    exitSticky(): any;
    exitSticky(states: StateOrName): any;
    exitSticky(states: StateOrName[]): any;
    _getInactive: (node: any) => PathNode;
}
