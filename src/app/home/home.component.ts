import { Component, OnInit } from '@angular/core';
import { PostsModel } from '../models/posts.model';
import { PostsService } from '../services/posts.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postStatus="";

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  onPostHandler(data:PostsModel): void{
    //API Interaction
    console.log(data);
    this.postsService.addNewPost(data).subscribe(
      (res:any)=> {this.postStatus=res; },
      (error)=> {this.postStatus="Invalid Inputs";}
    );
    this.postStatus="Invalid Inputs";
  }

}
