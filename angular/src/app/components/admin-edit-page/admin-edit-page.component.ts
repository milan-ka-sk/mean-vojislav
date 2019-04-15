import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {

  title: string;
  content: string;
  id: string;
  successMsg: boolean = false;
  param: any;


  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params["id"];
      this.pageService.getEditPage(this.param).subscribe(page => {
        console.log(page);
        this.title = page.title;
        this.content = page.content;
        this.id = page.id;
      })
    });
  }

}
