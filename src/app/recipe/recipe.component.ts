import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  public post: any;
  public url: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.url = 'https://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=' + this.route.snapshot.paramMap.get('recipe-name');

    this.http.get(this.url).subscribe(res => {
      this.post = res[0];
    });

  }

}
