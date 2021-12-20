import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CheckserviceService } from '../service/checkservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm !:FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private userservice:CheckserviceService) { }

  ngOnInit(): void {
    this.contactForm=this.formbuilder.group(
      {
       name:[''],
       email:[''],
       message:[''],
      }
      
    )
  }
  submitdata()
  {
    this.userservice.submit(this.contactForm.value).subscribe((data)=>
      {
        console.log(data);
        this.router.navigate(['/about'])
      },
      err=>
      {
        console.log(err);
      });

  }

}
