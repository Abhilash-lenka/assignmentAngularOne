import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostsModel } from '../models/posts.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  @Input()
  status:string='';

  @Output()
  onPostInput=new EventEmitter<PostsModel>();
  post:string= '';


  constructor(private routerService:Router) { }

  ngOnInit(): void {
  }

  onPost(inputValue: string):void{
    this.post=inputValue;
    console.log(this.post);
    this.routerService.navigate(['/home']);
    //return this.post;
    this.onPostInput.emit(new PostsModel(this.post));
    
  }

  onPostEdit(inputValue: string):void{
    this.post= inputValue;
    console.log(this.post);
    //this.loggerService.writeLog(this.post);
  }

}
