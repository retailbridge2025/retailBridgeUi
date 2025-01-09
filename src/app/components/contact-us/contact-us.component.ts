import { Component } from '@angular/core';
import {ObjectiveComponent} from '../objective/objective.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [
    ObjectiveComponent,ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
