import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  createContact = this.fb.group({
    name: [null, [Validators.required, Validators.max(2), this.forbiddenName.bind(this)]],
    email: ['', [Validators.required, Validators.email], this.forbiddenEmail as AsyncValidatorFn],
    message: ['', [Validators.required]]
  })


  constructor(private contactService: ContactService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }


  get formValues() {
    return this.createContact.controls;
  }

  createNewContact() {
    // console.log(this.createContact.value)
    const body = {
      name: this.formValues['name'].value,
      email: this.formValues['email'].value,
      message: this.formValues['message'].value
    }
    this.contactService.create(body).subscribe((data) => {


      this.createContact.reset();
    })


  }

  forbiddenName(control: FormControl): { [s: string]: boolean } | null {

    if (control.value == 'Test') {
      return { 'ForbiddentName': true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'Test@test.com') {
          resolve({ forbiddenEmail: true })
        }
        else {
          resolve(null)
        }
      }, 1500)
    });
    return promise;
  }

}
