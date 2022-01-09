var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, } from 'react';
var Context = createContext({ defaultUrl: '/' });
export var MilAdmin = function (_a) {
    var defaultUrl = _a.defaultUrl, children = _a.children;
    var providerValue = useMemo(function () { return ({ defaultUrl: defaultUrl }); }, [defaultUrl]);
    return (_jsx(Context.Provider, __assign({ value: providerValue }, { children: children }), void 0));
};
