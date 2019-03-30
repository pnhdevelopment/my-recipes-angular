import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

	public URL: string;
	public post: any;

	constructor( public route: ActivatedRoute, public http: HttpClient ){

	    this.URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=" + this.route.snapshot.paramMap.get('mealName');

	    this.http.get(this.URL).subscribe(response => {
			this.post = response[0];
		});
	
	}

	ngOnInit() { 	
  	}

	imageFadeIn(el){
		el.style.opacity = 1;
	}


}
