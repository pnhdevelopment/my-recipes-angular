import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	
	public posts: any;
  public url: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

	ngOnInit() {

    this.url = 'http://my-recipes-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&categories=' + this.route.snapshot.params.id;
		
		this.http.get(this.url).subscribe(res => {
    		this.posts = res;
  		});

	}

}
