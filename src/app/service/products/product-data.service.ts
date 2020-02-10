import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { PRODUCT_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  retrieveAllProducts(){
  return this.http.get<Product[]>(`${PRODUCT_JPA_API_URL}/products`);
  }

  deleteProduct(id){
    return this.http.delete(`${PRODUCT_JPA_API_URL}/products/${id}`);
  }

  retrieveProduct(id){
    return this.http.get<Product>(`${PRODUCT_JPA_API_URL}/products/${id}`);
  }

  updateProduct(id, product){
    return this.http.put(
      `${PRODUCT_JPA_API_URL}/products/${id}`
      , product);
  }

  createProduct(product){
    return this.http.post(
      `${PRODUCT_JPA_API_URL}/products`
      , product);
  }

  imageUpload(uploadData){
    return this.http.post(`${API_URL}/rest/photo/upload`, uploadData, {reportProgress: true,
      observe: 'events'});
  }

  sendImage(image: ImageModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${API_URL}/rest/photo/add`, JSON.stringify(image), httpOptions);
  }

  updateImage(image: ImageModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(`${API_URL}/rest/photo/update`, JSON.stringify(image), httpOptions);
  }

  retrieveImage(id){
    return this.http.get(`${API_URL}/fetch/${id}`);
  }

  sendEmail(email){
    return this.http.post(`${API_URL}/send-mail`, email, { responseType: 'text' });
  }
}


export class Product{
  constructor(
    public productId: number, 
    public productName: string,
    public productCategory: string,
    public image: ImageModel[],
    public productPrice: number,
    public productDiscount: string,
  ){}
}

export class ImageModel{
  constructor(
    public photoId: number,
    public photoName: string,
    public product: Product
    ){}
}

export class Email{
  constructor(
  public emailAddress: string,
  public fromEmailAddress: string,
  public emailTitle: string,
  public emailMessage: string
  ){}
}
