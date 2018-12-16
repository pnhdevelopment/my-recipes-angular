import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
  public posts: any;
  public url: string = 'https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get(this.url).subscribe(res => {
    	this.posts = res;
  	});
  	
  }

}
