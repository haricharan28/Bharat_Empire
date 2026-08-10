import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  propertyForm: FormGroup;

  properties: any[] = [];

  constructor(private fb: FormBuilder, private adminService:AdminService) {

    this.propertyForm = this.fb.group({

      name: ['', Validators.required],

      state: ['', Validators.required],

      boardPosition: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(39)
        ]
      ],

      price: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      rent: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      mortgageValue: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      color: [
        '#8D6E63',
        Validators.required
      ],

      propertyType: [
        'PROPERTY',
        Validators.required
      ],

      houseCost: [
        0,
        Validators.min(0)
      ],

      hotelCost: [
        0,
        Validators.min(0)
      ]

    });

  }

  addProperty(): void {

    if (this.propertyForm.invalid) {

      this.propertyForm.markAllAsTouched();

      return;

    }

    this.adminService.addProperty(this.propertyForm.value).subscribe({
      next:()=>{
        console.log("added Property");
      },
      error(err) {
          console.log(err);
      },
    });

    // const property = {

    //   ...this.propertyForm.value,

    //   id: this.properties.length + 1

    // };

    // this.properties.push(property);

    this.propertyForm.reset({

      name: '',

      boardPosition: '',

      price: '',

      rent: '',

      mortgageValue: '',

      color: '#8D6E63',

      propertyType: 'PROPERTY',

      houseCost: 0,

      hotelCost: 0

    });

  }

  removeProperty(index: number): void {

    this.properties.splice(index, 1);

  }

}