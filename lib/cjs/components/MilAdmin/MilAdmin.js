"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilAdmin = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Context = (0, react_1.createContext)({ defaultUrl: '/' });
var MilAdmin = function (_a) {
    var defaultUrl = _a.defaultUrl, children = _a.children;
    var providerValue = (0, react_1.useMemo)(function () { return ({ defaultUrl: defaultUrl }); }, [defaultUrl]);
    return ((0, jsx_runtime_1.jsx)(Context.Provider, __assign({ value: providerValue }, { children: children }), void 0));
};
exports.MilAdmin = MilAdmin;
