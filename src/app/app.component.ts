import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ObjectiveComponent} from './components/objective/objective.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import EkiliRelay from 'ekilirelay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObjectiveComponent, ContactUsComponent, NgOptimizedImage, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'retailbridge';

  contactData = {
    fullName: '',
    company: '',
    phoneNumber: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  sendEmail(contactForm: any) {
    const mailer = new EkiliRelay('relay-94f824af5a8f7155eb8f3c2283'); // your-api-key goes here


    if (contactForm.invalid) {
      return;
    }

    const emailData = {
      to: 'retailbridge.2025@gmail.com',
      subject: 'New Contact Us Submission',
      body: `
        Full Name: ${this.contactData['fullName']}
        Company: ${this.contactData['company']}
        Phone Number: ${this.contactData['phoneNumber']}
        Email: ${this.contactData['email']}
        Message: ${this.contactData['message']}
      `
    }
    mailer.sendEmail(
      emailData.to,
      emailData.subject,
     emailData.body
    ).then(response => {
      console.log('response '+response);
      console.log('response status'+response.status);

      if (response.status === 'success') {
        console.log('Email sent successfully to .' + emailData.to);
      } else {
        console.log('Failed to send email: ' + response.message);
        console.log(response);
      }
    })
      .catch(error => {
        console.log('Error:', error);
      });
    contactForm.reset();
      }
    }




