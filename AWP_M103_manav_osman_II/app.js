
const BizimBakkal = {
  menus: '.menus',
  orders: '.orders',
  menuData: ['Elma', 'Armut', 'Sogan', 'Karpuz'],
  currentMenu: [],
  ordersData: []
};

BizimBakkal.renderMenu = function(){

  const ulMenus = this.menuData
                    .map(item => {
                      return `<li id="${item}" class="${item}">${item}</li>`;
                    })
                    .join('');

  this.addToDom(this.menus, ulMenus);
}

BizimBakkal.addToDom = function(selector, html){
  document.querySelector(selector).innerHTML = html;
}

BizimBakkal.renderOrder = function(){
  const ulMenus = this.ordersData
                  .map((item, index, items) => {
                    const count = items.filter(a => a == item).length;
                    return {key:item, value: count};
                  })
                  .reduce((sum, current) => {
                      if(!sum.map(a => a.key).includes(current.key)){
                        sum.push(current);
                      }
                      return sum;
                  }, [])
                  .map(info => {
                    return `<li class="${info.key}">
                                ${info.key} * ${info.value} <span class="delete">x</span>
                            </li>`;
                  })
                  .join('');

  this.addToDom(BizimBakkal.orders, ulMenus);
}

BizimBakkal.AddMenuEvents = function(){
  document.querySelector(this.menus)
          .addEventListener('click', function(e){
              const selectedItem = e.target.className;
              this.ordersData.push(selectedItem);

              this.renderOrder();
          }.bind(this))
}


BizimBakkal.AddOrderEvents = function(){
  document.querySelector(this.orders)
          .addEventListener('click', function(e){
            const className = e.target.className;
            if(className == 'delete'){
              const parentClass = e.target.parentElement.className;
              const itemIndex = this.ordersData.indexOf(parentClass);
              this.ordersData.splice(itemIndex, 1);
              this.renderOrder();
            }
          }.bind(this))
}

BizimBakkal.start = function(){
  this.renderMenu();
  this.AddMenuEvents();
  this.AddOrderEvents();
}

BizimBakkal.start();
