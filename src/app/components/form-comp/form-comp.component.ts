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
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      gender: [null, Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.isSubmitted = true;
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Gender', form.value.gender);
    console.log('Message', form.value.message);
    console.log('form instances', this.myForm);
  }

  getErrorMessage() {
    if (this.myForm.get('email')?.errors?.required)
      return 'You must enter a value';

    return this.myForm.get('email')?.errors?.email ? 'Not a valid email' : '';
  }
}
