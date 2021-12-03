import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { PostsModel } from "../models/posts.model";
import { services } from "./service.constants";


@Injectable()
export class PostsService{

    constructor(@Inject(services.AccountServiceEndpointAddress) public baseAddress:string, public httpReq:HttpClient){}

    addNewPost(postInfo:PostsModel){

        const headers = {'content-type': 'application/json'};
        const body = postInfo;

        return this.httpReq.post<PostsModel>(
            this.baseAddress+"/content", body , {headers}
        );

    }
}