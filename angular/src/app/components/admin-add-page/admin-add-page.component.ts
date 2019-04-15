import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';

declare var CKEDITOR: any;
// if i wanted to use jquery
// declare var $: any;

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public title: string;
  public content: string;

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
    }
    CKEDITOR.replace( 'content' );
    // jquery test
    // $('body').append("XXXXXX");
  }

  addPage({form, value, valid}){
    
    if(valid){
      value.content = CKEDITOR.instances.content.getData();
      console.log(value);
      this.pageService.postAddPage(value).subscribe(res => {
        if(res == 'pageExists'){
          this.errorMsg = true;
          setTimeout(function(){
            this.errorMsg = false;
          }.bind(this), 2000);
        } else{
          this.successMsg = true;
          setTimeout(function(){
            this.successMsg = false;
          }.bind(this), 2000);

          CKEDITOR.instances.content.setData(''); // i.e. clear the textfield

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          })
        }
      });
    } else{
      console.log("Form is not valid");
    }
    form.reset();
  }

}
