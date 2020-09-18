import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${environment.baseURL}/product`);
  }

  addToCart(payload) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }

  getCartItems() {
    return this.http.get(`${environment.baseURL}/cart`);
  }

  increaseQty(payload) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }

  emptyCart() {
    return this.http.delete(`${environment.baseURL}/cart/empty-cart`);
  }
}
