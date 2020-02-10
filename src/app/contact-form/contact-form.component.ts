import { Component, OnInit } from '@angular/core';
import { Email, ProductDataService } from '../service/products/product-data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  email: Email;
  emailStatusOK: String;
  emailStatusERR: String;
  sendButton: String;

  constructor(
    private productService: ProductDataService
  ) { }

  ngOnInit() {
    this.email = new Email("", "", "", "");
    this.sendButton = "WYŚLIJ WIADOMOŚĆ";
  }

  sendEmail(){
    this.sendButton = "Wysyłanie...";
    this.emailStatusOK = "";
    this.emailStatusERR = "";
    this.productService.sendEmail(this.email)
    .subscribe(
      res =>{
        this.emailStatusOK = "Wiadomość została wysłana.";
        this.email.fromEmailAddress = "";
        this.email.emailTitle = "";
        this.email.emailMessage = "";
        this.sendButton = "WYŚLIJ WIADOMOŚĆ";
      },
      err => {
        this.emailStatusERR = "Wystąpił błąd podczas wysyłania.";
      }
    );
  }

}
