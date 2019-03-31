import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

	public URL: string;
	public post: any;

	constructor(
		public route: ActivatedRoute,
		public http: HttpClient,
		private titleService: Title,
		private meta: Meta ){

	    this.URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=" + this.route.snapshot.paramMap.get('mealName');

	    this.http.get(this.URL).subscribe(response => {
			this.post = response[0];
			// console.log(this.post);

			this.titleService.setTitle( this.post.title.rendered + ' - My Recipes' );

			this.meta.addTag({ name: 'description', content: this.post.title.rendered });
      		this.meta.addTag({ name: 'author', content: 'pnhdevelopment' });
      		this.meta.addTag({ name: 'keywords', content: 'Recipes, Breakfast, Lunch, Dinner, Drinks' });

		});
	
	}	


	ngOnInit(){	
  	}


	imageFadeIn(el){
		el.style.opacity = 1;
	}


}
