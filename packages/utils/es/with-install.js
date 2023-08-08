export const withInstall = (comp) => {
    comp.install = function (app) {
        const { name } = comp;
        app.component(name, comp);
    };
    return comp;
};
