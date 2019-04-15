import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean;
  errorMsg: boolean;

  constructor(
    private pageService: PageService, 
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
    }
    
    this.pages = this.pageService.pagesBS;
  }

}
