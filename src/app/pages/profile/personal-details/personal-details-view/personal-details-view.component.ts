import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.component.html',
  styleUrls: ['./personal-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsViewComponent implements OnInit {
  personalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalForm = this.fb.group({
      displayName: ["", Validators.required],
      emailAddress: ["", [Validators.required, Validators.email]],
      fullName: ["", Validators.required],
      birthDate: [new Date(), Validators.required],
      country: ["", Validators.required],
      city: ["", Validators.required],
      postCode: [""],
      street: ["", Validators.required],
      hNumber: ["", Validators.required],
    })
  }

  hasError(control: string, errorName: string) {
    return this.personalForm.get(control)?.hasError(errorName);
  }

  ngOnInit(): void {
  }

}
