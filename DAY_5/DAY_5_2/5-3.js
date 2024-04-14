//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//ADD
shoppingCart.push("Bread");
//remove
shoppingCart.shift();
//edit

const itemEdit = shoppingCart.indexOf('Tea');
if (itemEdit !== -1){
    shoppingCart[itemEdit] = "Black Tea";

}
console.log(shoppingCart)