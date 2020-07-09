import { Component, OnInit } from '@angular/core';
import { DatasvcService } from '../service/datasvc.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
})
export class ShowPostComponent implements OnInit {
  data = {
    postId: '',
  };

  searchData = {
    email: '',
    name: '',
    body: '',
  };

  public currId: any;
  public posts: any;
  public showCommBool: boolean = false;
  public comments: any;
  public srcEmail: any;
  public srcName: any;
  public srcBody: any;
  public notSearched: boolean = false;
  public searchedComm: any;

  constructor(private srvc: DatasvcService) {}

  ngOnInit() {}

  searchPost() {
    this.currId = this.data.postId;
    this.srvc.getPostsById(this.currId).subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }

  showComments() {
    this.currId = this.data.postId;
    this.srvc.getCommentsByPost(this.currId).subscribe((res) => {
      this.showCommBool = true;
      console.log(res);
      this.comments = res;
    });
  }

  searchComment() {
    this.srcEmail = this.searchData.email;
    this.srcName = this.searchData.name;
    this.srcBody = this.searchData.body;

    let emailArr = [];
    let nameArr = [];
    let bodyArr = [];

    let commentsArrayLength = this.comments.length;

    this.notSearched = true;
    //  let i =0;
    for (let i = 0; i < commentsArrayLength; i++) {
      emailArr[i] = this.comments[i].email;
      nameArr[i] = this.comments[i].name;
      bodyArr[i] = this.comments[i].body;
    }

    for (let k = 0; k < emailArr.length; k++) {
      if (this.srcEmail === emailArr[k]) {
        this.searchedComm = this.comments[k];
        console.log(this.searchedComm);
      } else if (this.srcName === nameArr[k]) {
        this.searchedComm = this.comments[k];
      } else if (this.srcBody === bodyArr[k]) {
        this.searchedComm = this.comments[k];
      }
    }
  }
}
