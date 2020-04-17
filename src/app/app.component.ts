import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chronoGiphy';
  data = [
    "../assets/balloon.jpg",
    "../assets/keyboard.jpg",
    "../assets/logo.png",
    "../assets/moon.jpg",
    "../assets/netherlands.jpg",
    "../assets/water.jpg",
    "../assets/work.png",
  ];
  // data:any;
  search:string;
  output:any;
  length:any;

  
  constructor(private gif:GiphyService){}

  onClick() {
    this.getGiphy();
    console.log("The button is clicked");
  }

  getGiphy() {
    this.length = 10;
    this.gif.getGiphy(this.search,this.length).subscribe(
      response => {
        this.output = response;
        // console.log(this.output.data[0].images.original.url);
        console.log(this.output);
        
        this.data = [
          this.output.data[0].images.original.url,
          this.output.data[1].images.original.url,
          this.output.data[2].images.original.url,
          this.output.data[3].images.original.url,
          this.output.data[4].images.original.url,
          this.output.data[5].images.original.url,
          this.output.data[6].images.original.url,
          this.output.data[7].images.original.url,
          this.output.data[8].images.original.url,
          this.output.data[9].images.original.url,
        ];
        
        console.log(this.data);
       
      },
      err => {
        console.error(err);},
      () => {
        console.log('Done loading api');
      }    
    );
  }

  

}
