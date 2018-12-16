import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public posts: any;
  public url: string = 'https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media';

  constructor(private location: Location, private http: HttpClient) { }

  ngOnInit() {
  	this.http.get(this.url).subscribe(res => {
    	this.posts = res;
  	});
  }

  goBack(){
  	this.location.back();
  }

}
