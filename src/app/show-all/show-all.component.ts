import { Component, OnInit } from '@angular/core';
import { DatasvcService } from '../service/datasvc.service'
// import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {

  
  
  public allPosts: any;

  constructor(private dataSvc: DatasvcService) {}

  ngOnInit() {

    this.dataSvc.getPosts().subscribe((res) => {
      this.allPosts = res;
      console.log(this.allPosts);
    });
  }


}
