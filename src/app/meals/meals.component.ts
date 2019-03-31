import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})



  


export class MealsComponent implements OnInit {

	
	public URL: string;
  public posts: any;


	constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    private titleService: Title ){

    this.URL = "https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&categories=" + this.route.snapshot.paramMap.get('id');

    this.http.get(this.URL).subscribe(response => {
      this.posts = response;

      // console.log();

      this.titleService.setTitle( this.posts[0]['_embedded']['wp:term'][0][0]['name'] + " - My Recipes" );

    });


    

	}


  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( "newTitle" );
  // }



  ngOnInit() { 	
  }


  imageFadeIn(el){
  	el.style.opacity = 1;
  }



}
