"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstall = void 0;
const withInstall = (comp) => {
    comp.install = function (app) {
        const { name } = comp;
        app.component(name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
