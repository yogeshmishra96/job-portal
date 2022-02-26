import { Component, OnInit } from '@angular/core';
import {ForrecruiterService} from '../../forrecruiter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.css']
})
export class RprofileComponent implements OnInit {

  profileinfo: any;
  profilepic: any;
  picexists: boolean = false;
  successmsg: any;
  constructor(private recruiterService: ForrecruiterService, private router: Router) { }

  ngOnInit() {
    this.getprofile();

  }
  getprofile() {
    this.recruiterService.getprofile().subscribe(
      (response: any) => {
        this.profileinfo = response;
        //console.log(JSON.stringify(response.profileimage));
        let image:any = response.profileimage;
        //console.log(image);
        if (image != "") {
          this.picexists = true;
        }
        else {
          this.picexists = false;
        }

      }, (error) => {
        console.log("Server Error");
      }
    )
  }
  logout() {
    this.recruiterService.logout();
    this.router.navigate(['login/emp_login']);
  }
  selectimage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profilepic = file;
    }
  }
  upload() {
    const formdata = new FormData();
    formdata.append('profileimage', this.profilepic);
    this.recruiterService.uploadprofilepic(formdata).subscribe((res) => {
      if (res) {
        this.successmsg = res
      }
      setTimeout(() => {
        this.successmsg = '';
        this.getprofile();
      }, 2000);

      // setTimeout(()=>{
      //   this.router.navigate(['/seeker/eprofile'])
      // },1000);
      this.router.navigate(['seeker/eprofile']);
    }, (error) => {
      if (error) {
        console.log(error);
      }
    })
  }


}
