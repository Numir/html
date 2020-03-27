const BizimBakkal = {};

BizimBakkal.renderMenu = function() {
    const menus = ["elma", "Armut", "Soğan"];
    const ulMenus = menus.map(item => {
        return '<li class="${item}">${item}</li>'
    }).join("");
    BizimBakkal.addOrder
};
BizimBakkal.addOrder = function() {

};
BizimBakkal.renderOrder = function() {

};
BizimBakkal.catchEvents = function() {

};
BizimBakkal.start = function() {
    BizimBakkal.renderMenu();

    //  BizimBakkal.a
    //BizimBakkal.catchEvents();
};

BizimBakkal.start();