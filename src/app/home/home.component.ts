import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	

  public posts: any;
  public url: string = 'https://www.my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/media?per_page=16';
  

  constructor(
    private http: HttpClient,
    private titleService: Title,
    private meta: Meta){

      this.titleService.setTitle( 'My Recipes' );

      this.meta.addTag({ name: 'description', content: 'A collection of delicious recipes. Ideal for breakfast, lunch or dinner.' });
      this.meta.addTag({ name: 'author', content: 'pnhdevelopment' });
      this.meta.addTag({ name: 'keywords', content: 'Recipes, Breakfast, Lunch, Dinner, Drinks' });

  }


  ngOnInit() {

    document.body.style.overflow = "hidden";

  	this.http.get(this.url).subscribe(res => {
    	this.posts = res;
      console.log(this.posts);
  	});

  }

  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }

  imageFadeIn(el){
    el.style.opacity = 1;
  }


}
