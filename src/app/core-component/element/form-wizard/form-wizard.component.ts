import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  public routes = routes;

  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
  ngOnInit(): void {
  }

}
