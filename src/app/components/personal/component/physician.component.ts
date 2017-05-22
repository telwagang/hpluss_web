import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'physician',
    templateUrl: `app/components/personal/view/physician.view.html`,
    styles: [`
        button{
            margin-top: 20px;
        }
    `]
})

export class PhysicianComponent implements OnInit {

    physician: FormGroup;
    days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];
    times = ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Full'];
    constructor(private fb: FormBuilder) {
        this.physician = this.fb.group({
            email: ['', Validators.required],
            confirm: ['', Validators.required],
            licenseNo: [''],
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: ['', Validators.required],
            specialty: ['', Validators.required],
            registrationNo: ['', Validators.minLength(6)],
            comfirmpassword: ['', Validators.required],
            password: ['', Validators.minLength(7)]
        });
    }
    ngOnInit(): void {
    }
    onSubmit(value: any) {
        console.log(value);
    }
}

