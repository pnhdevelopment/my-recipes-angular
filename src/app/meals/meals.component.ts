import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

	
	public URL: string;
  public posts: any;


	constructor( public route: ActivatedRoute, public http: HttpClient ){

    this.URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&categories=" + this.route.snapshot.paramMap.get('id');

    this.http.get(this.URL).subscribe(response => {
      this.posts = response;
    });

	}



  ngOnInit() { 	
  }


  imageFadeIn(el){
  	el.style.opacity = 1;
  }



}
