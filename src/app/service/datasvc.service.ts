import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatasvcService {
 // public sendData: Array<Object>;


  private dataURL: string = 'https://jsonplaceholder.typicode.com/posts';
 // private commentsURL: 'https://jsonplaceholder.typicode.com/comments?postId='
  constructor(private http: HttpClient) {}
  
  // Function to get all posts
  public getPosts() {

    return this.http.get(this.dataURL);
  }
  
  // Function to get posts by id
  public getPostsById(id){
    return this.http.get(this.dataURL+'/'+id)
  }
  
  // Function to get comments for a post by Id
  public getCommentsByPost(id){
    return this.http.get('https://jsonplaceholder.typicode.com'+'/comments?postId='+id)
  }
}
