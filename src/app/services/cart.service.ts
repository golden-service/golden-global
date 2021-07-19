import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { CartItem } from '../models/cart-item';
import { ReplaySubject, BehaviorSubject } from '../../../node_modules/rxjs';
import Swal from 'sweetalert2'
import { Router } from '../../../node_modules/@angular/router';
import { Pet } from '../models/pets';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartTotalSubject = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([] as CartItem[]);
  constructor(private router: Router) {
    this.loadCart();
  }

  private saveCart(items: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(items));
    this.cartItemsSubject.next(this.getCart());
  }

  private getCart(): CartItem[] {
    let rawCart = JSON.parse(localStorage.getItem('cart'));
    if (!rawCart)
      return null;
    else
      return rawCart.map((item: CartItem) => new CartItem().deserialize(item));
  }

  getItems() {
    return this.cartItemsSubject;
  }

  add(newItem: Item): void {
    let cart: CartItem[] = [];
    let cartItem: CartItem = new CartItem();
    cartItem.pet = newItem.pet;
    cart.push(cartItem);
    this.saveCart(cart);
    // else {
    //   let cart: CartItem[] = this.getCart();
    //   let index: number = -1;
    //   for (var i = 0; i < cart.length; i++) {
    //     let item: CartItem = cart[i];
    //     if (item.pet.id == newItem.pet.id) {
    //       index = i;
    //       break;
    //     }
    //   }
    //   if (index == -1) {
    //     let cartItem: CartItem = new CartItem();
    //     cartItem.pet = newItem.pet;
    //     cart.push(cartItem);
    //     this.saveCart(cart)
    //   } 
    //   if(index != -1) {
    //     Swal({
    //         title: 'Cart Warning',
    //         text: newItem.pet.name + ' exist already in your cart.' + ' Go to Cart?',
    //         animation: false,
    //         confirmButtonColor: '#7971ea',
    //         showCancelButton: true,
    //         confirmButtonText: 'Go to cart',
    //         cancelButtonText: 'No thanks',
    //         imageWidth: 250,
    //         imageHeight: 300,
    //         imageUrl: newItem.pet.image,
    //       }).then((result) => {
    //         if (result.value) {
    //           this.router.navigate(["../../cart"])
    //         } else if (result.dismiss === Swal.DismissReason.cancel) { }
    //       })
    //       this.cartTotalSubject.next(this.getCart().length);
    //   }
    // }
    // Swal({
    //   title: 'Cart Updated',
    //   text: newItem.pet.name + ' has been added to your cart.' + ' Go to Cart?',
    //   animation: false,
    //   confirmButtonColor: '#7971ea',
    //   showCancelButton: true,
    //   confirmButtonText: 'Go to cart',
    //   cancelButtonText: 'No thanks',
    //   imageWidth: 250,
    //   imageHeight: 300,
    //   imageUrl: newItem.pet.image,
    // }).then((result) => {
    //   if (result.value) {
    //     this.router.navigate(["../../cart"])
    //   } else if (result.dismiss === Swal.DismissReason.cancel) { }
    // })
    this.cartTotalSubject.next(this.getCart().length);
  }

  remove(item: CartItem): CartItem[] {
    Swal({
      title: 'Delete?',
      text: 'Are you sure you want to remove ' + item.pet.name + ' from your cart?',
      animation: false,
      confirmButtonColor: '#018AE0',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      imageWidth: 250,
      imageHeight: 300,
      imageUrl: item.pet.image,
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        let cart: CartItem[] = this.getCart()
        for (var i = 0; i < cart.length; i++) {
          if (item.pet.id == cart[i].pet.id) {
            cart.splice(i, 1);
            break;
          }
        }
        this.saveCart(cart);
        this.cartTotalSubject.next(this.cartTotalSubject.value - 1)
        Swal(
          'Deleted!',
          item.pet.name + ' has been removed from your cart',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) { }
    })
    return this.getCart()
    //this.loadCart();
  }

  total(): number {
    let total: number = 0;
    if (this.getCart() != null) {
      let cart: CartItem[] = this.getCart()
      for (var i = 0; i < cart.length; i++) {
        total += this.getPrice(cart[i].pet);
      }
    }
    return total;
  }

  //return the total number of items present in the cart
  totalItems(): number {
    let total: number = 0;
    if (this.getCart() != null) {
      let cart: CartItem[] = this.getCart();
      for (var i = 0; i < cart.length; i++) {
        total += 1;
      }
    }
    return total;
  }

  //return a discount on the total amount of items given a discount rate
  discount(): number {
    let discount: number = 0;
    if (this.getCart() != null) {
      if (this.totalItems() > 0) {
        discount = (10 / 100) * this.total();
        return discount;
      }
      // if(this.totalItems() >= 5) {
      //   discount = (20 / 100) * this.total();
      //   return discount;
      // } 
    }
    return discount;
  }

  //return the shipping cost base on the total number of items present in the cart
  shipping(): number {
    let shipping: number = 0;
    if (this.getCart() != null) {
      if (this.totalItems() <= 0) {
        shipping = 0;
        return shipping;
      }
      if (this.totalItems() <= 2) {
        shipping = 50;
        return shipping;
      }
      if (this.totalItems() <= 5) {
        shipping = 100;
        return shipping;
      }
      if (this.totalItems() <= 10) {
        shipping = 150;
        return shipping;
      }
      else {
        shipping = 200;
      }
    }
    return shipping;
  }

  grandTotal(): number {
    let total: number = 0;
    if (this.getCart() != null) {
      total = this.total() - this.discount();
    }
    return total;
  }

  update(cartItems: CartItem[]): void {
    this.saveCart(cartItems)
    this.cartTotalSubject.next(cartItems.length)

  }

  getCartNumber() {
    return this.cartTotalSubject;
  }

  loadCart() {
    let cartItems: CartItem[] = this.getCart();
    if (cartItems != null && cartItems.length > 0) {
      this.cartTotalSubject.next(cartItems.length);
      this.cartItemsSubject.next(this.getCart())
    }
    else {
      this.cartItemsSubject.next([] as CartItem[])
      this.cartTotalSubject.next(0);
    }

  }

  getPrice(pet: Pet): number {
    let price: number = 0;
    price = pet.price;
    return price;
  }

  purge() {
    localStorage.removeItem('cart')
    this.cartItemsSubject.next([] as CartItem[])
    this.cartTotalSubject.next(0);
  }

}
