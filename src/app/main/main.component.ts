import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(
    () => this.scroll(), 400);
  }

  scroll(){
    this.route.fragment.subscribe((fragment: string) => { 
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ block: 'start',  behavior: 'smooth' });
      }
    });
  }

}
