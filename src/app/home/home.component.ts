import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	

  public posts: any;
  public url: string = 'https://www.my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media?per_page=16';
  

  constructor(private http: HttpClient) { }


  ngOnInit() {

    document.body.style.overflow = "hidden";

  	this.http.get(this.url).subscribe(res => {
    	this.posts = res;
  	});  	
  }

  imageFadeIn(el){
    el.style.opacity = 1;
  }


}
