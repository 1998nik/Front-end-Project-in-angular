import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { userModel } from './usermodel';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
  columnI = [
    'firsname',
    'lastname',
    'email',
    'mobile',
    'Action',
  ];

  showAdd!:boolean;
showUpdate !:boolean;
 
 formValue!: FormGroup;
 
 userObj: userModel = new userModel();
 userdata: any;
 

 

  constructor(private formBuilder: FormBuilder, private api: UserserviceService) { }

  ngOnInit(): void 
  {
    this.formValue = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      
    });
    this.getAlldata();
  }

  clickAdd()
{
 this.formValue.reset();
 this.showAdd=true;
 this.showUpdate=false;
}

postdatadetails() {
  this.userObj.firstname = this.formValue.value.firstname;
  this.userObj.lastname = this.formValue.value.lastname;
  this.userObj.email = this.formValue.value.email;
  this.userObj.mobile = this.formValue.value.mobile;

  this.api.postdata(this.userObj).subscribe(
    (res) => {
      console.log(res);
      alert('Details added successfuly');
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAlldata();
    },
    (err) => {
      alert('something went worng!');
    }
  );
}
getAlldata() {
  this.api.getdata().subscribe((res) => {
    this.userdata = res;
  });
}

deletedatas(row: any) {
  this.api.deletedata(row.id).subscribe((res) => {
    alert('user Details is Deleted');
    this.getAlldata();
  });
}

onEdit(row: any) {
  this.showUpdate=true;
  this.showAdd=false;
  this.userObj.id=row.id;
  this.formValue.controls['firstname'].setValue(row.firstname);
  this.formValue.controls['lastname'].setValue(row.lastname);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);

}

updateDetails() {
 
  this.userObj.firstname = this.formValue.value.firstname;
  this.userObj.lastname = this.formValue.value.lastname;
  this.userObj.email = this.formValue.value.email;
  this.userObj.mobile = this.formValue.value.mobile;
  console.log(this.userObj);
  
  this.api.updatedata(this.userObj,this.userObj.id)
  .subscribe(res=>
    {
      alert("Updated Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAlldata();
    })
}



}
