"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNamespace = void 0;
function _bem(prefixName, blockName, elementName, modifierName) {
    if (blockName) {
        prefixName += `-${blockName}`;
    }
    if (elementName) {
        prefixName += `__${elementName}`;
    }
    if (modifierName) {
        prefixName += `--${modifierName}`;
    }
    return prefixName;
}
function createBEM(prefixName) {
    const b = (blockName) => _bem(prefixName, blockName, "", "");
    const e = (elementName) => elementName ? _bem(prefixName, "", elementName, "") : "";
    const m = (modifierName) => modifierName ? _bem(prefixName, "", "", modifierName) : "";
    const be = (blockName, elementName) => blockName && elementName
        ? _bem(prefixName, blockName, elementName, "")
        : "";
    const bm = (blockName, modifierName) => blockName && modifierName
        ? _bem(prefixName, blockName, "", modifierName)
        : "";
    const em = (elementName, modifierName) => elementName && modifierName
        ? _bem(prefixName, "", elementName, modifierName)
        : "";
    const bem = (blockName, elementName, modifierName) => blockName && elementName && modifierName
        ? _bem(prefixName, blockName, elementName, modifierName)
        : "";
    const is = (name, state) => (state ? `is-${name}` : "");
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is,
    };
}
function createNamespace(name) {
    const prefixName = `elu-${name}`;
    return createBEM(prefixName);
}
exports.createNamespace = createNamespace;
