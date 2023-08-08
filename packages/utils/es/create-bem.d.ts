export declare function createNamespace(name: string): {
    b: (blockName?: any) => any;
    e: (elementName: any) => any;
    m: (modifierName: any) => any;
    be: (blockName: any, elementName: any) => any;
    bm: (blockName: any, modifierName: any) => any;
    em: (elementName: any, modifierName: any) => any;
    bem: (blockName: any, elementName: any, modifierName: any) => any;
    is: (name: any, state?: any) => string;
};
