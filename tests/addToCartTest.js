import { addToCartPage } from '../pages/addToCart.js';

const cart = new addToCartPage();
await cart.browserOpen('https://demowebshop.tricentis.com/');
await cart.SelectFromTheMenu();
await cart.AddToTheCartProduct();



