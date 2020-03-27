
const BizimBakkal = {
  menus: '.menus',
  orders: '.orders',
  menuData: ['Elma', 'Armut', 'Sogan', 'Karpuz'],
  currentMenu: [],
  ordersData: []
};

BizimBakkal.renderMenu = function(){

  const ulMenus = BizimBakkal.menuData
                    .map(item => {
                      return `<li id="${item}" class="${item}">${item}</li>`;
                    })
                    .join('');

  BizimBakkal.addToDom(BizimBakkal.menus, ulMenus);
}

BizimBakkal.addToDom = function(selector, html){
  document.querySelector(selector).innerHTML = html;
}

BizimBakkal.renderOrder = function(){
  const ulMenus = BizimBakkal.ordersData
                  .map(item => {
                    return `<li id="${item}" class="${item}">${item}</li>`;
                  })
                  .join('');

  BizimBakkal.addToDom(BizimBakkal.orders, ulMenus);
}

BizimBakkal.AddMenuEvents = function(){
  document.querySelector(BizimBakkal.menus)
          .addEventListener('click', function(e){
             // TODO: event bubbling meselesi
             const selectedItem = e.target.className;

             BizimBakkal.menuData = BizimBakkal.menuData
                                      .filter(item => item != selectedItem);

             BizimBakkal.ordersData.push(selectedItem);

             BizimBakkal.renderMenu();
             BizimBakkal.renderOrder();
          })
}

BizimBakkal.AddOrderEvents = function(){
  document.querySelector(BizimBakkal.orders)
          .addEventListener('click', function(e){
             // TODO: event bubbling meselesi
             const selectedItem = e.target.className;

             BizimBakkal.ordersData = BizimBakkal.ordersData
                                      .filter(item => item != selectedItem);

             BizimBakkal.menuData.push(selectedItem);

             BizimBakkal.renderMenu();
             BizimBakkal.renderOrder();
          })
}

BizimBakkal.start = function(){
  BizimBakkal.renderMenu();
  BizimBakkal.AddMenuEvents();
  BizimBakkal.AddOrderEvents();
}

BizimBakkal.start();
