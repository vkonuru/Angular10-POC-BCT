import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css'],
})
export class FormCompComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      gender: '',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Gender', form.value.gender);
    console.log('Message', form.value.message);
    console.log('form instances', this.myForm);
  }

  getErrorMessage(form: FormGroup) {
    if (this.myForm.get('email').errors?.required)
      return 'You must enter a value';

    return this.myForm.get('email').errors?.email ? 'Not a valid email' : '';
  }
}
