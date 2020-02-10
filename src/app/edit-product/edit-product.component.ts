import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDataService, Product, ImageModel } from '../service/products/product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, NgForm } from "@angular/forms";
import { HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id:number;
  product:Product;
  newImage: ImageModel = new ImageModel(null,null,null);
  progress: number; 
  formType: string;
  specialChecked: boolean;
  errorMessage: string;
  addProductForm;
  selectedFile: File = null;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  @ViewChild('f', {static: false}) ngForm: NgForm;


  constructor(
    private productService: ProductDataService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.product = new Product(this.id, "","", null, null, null);
    this.formType = "Dodaj";
    if(this.id!=-1){
      this.productService.retrieveProduct(this.id)
      .subscribe(
        data => {
          this.product = data;
          this.imgURL = "http://localhost:8080/images/" + data.image[0].photoName;
          this.newImage.photoId = data.image[0].photoId;
          this.newImage.photoName = data.image[0].photoName;
          this.formType = "Zapisz";
        }
      );
    }
  }
  
saveProduct(id){

    if(this.id==-1){
      this.productService.createProduct(this.product)
      .subscribe(
        data => {
          this.newImage.product = JSON.parse(JSON.stringify(data));
          this.productService.sendImage(this.newImage)
         .subscribe(
           data => {
             this.newImage = new ImageModel(null,null,null);
             this.router.navigate(["admin"]);
           },
           error => {
             console.log(error);
             this.errorMessage = "Wystąpił błąd podczas przesyłania zdjęcia.";
           }
         );
        },
        error => {
          console.log(error);
          this.errorMessage = "Wystąpił błąd podczas dodawania produktu. Sprawdź dane.";
        }
      );
    } else {
      this.productService.updateProduct(this.id, this.product)
      .subscribe(
        data => {
          this.newImage.product = JSON.parse(JSON.stringify(data));
          this.productService.updateImage(this.newImage)
         .subscribe(
           data => {
             this.newImage = new ImageModel(null,null,null);
             this.router.navigate(["admin"]);
           },
           error => {
             console.log(error);
             this.errorMessage = "Wystąpił błąd podczas przesyłania zdjęcia.";
           }
         );
        },
        error => {
          this.errorMessage = "Wystąpił błąd podczas edycji produktu. Sprawdź dane.";
        }
      );
    }
  }


  uploadImg(){
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.newImage.photoName = this.selectedFile.name;
    this.productService.imageUpload(uploadData)
    .subscribe(
      (event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
      //      console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
       //     console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
         //   console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
          //  console.log('Image successfully sent', event.body);
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
  
        }
      },
      err => {
        console.log("Error occured during saving: " + err)
      }
    );
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    }
    this.uploadImg();
  }

}
