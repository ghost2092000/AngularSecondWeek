import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {


  public num: number = 0;
  
  constructor() { 
    console.log("splash constructor"); //i added this line
  }

  ngOnInit() {
    console.log("splash page initialized") //I added this line
  }


  //i added thse methods
  incNumber(): void {
    this.num += 1;
  }

  decNumber(): void{
    this.num -= 1;
  }

  consoleNum(): void {
    console.log('num', this.num);
  }


}
