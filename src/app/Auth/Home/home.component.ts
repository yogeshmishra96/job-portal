import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute) { }
  tabset:boolean=false;
  ngOnInit() {
  }
  /*employeeloginpage()
  {
    this.router.navigate(['emp_login'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }
  recruiterloginpage()
  {
    this.router.navigate(['rec_login'],{relativeTo:this.activatedroute});
    this.tabset=true;
  }*/
}
