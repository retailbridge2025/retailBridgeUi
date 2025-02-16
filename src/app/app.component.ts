import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import EkiliRelay from 'ekilirelay';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule
  ],
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

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  sendEmail(contactForm: any) {
    if (contactForm.invalid) {
      return;
    }

    const mailer = new EkiliRelay('relay-94f824af5a8f7155eb8f3c2283');

    const emailData = {
      to: 'retailbridge.2025@gmail.com',
      subject: 'New Contact Us Submission',
      body: `
        Full Name: ${this.contactData.fullName}
        Company: ${this.contactData.company}
        Phone Number: ${this.contactData.phoneNumber}
        Email: ${this.contactData.email}
        Message: ${this.contactData.message}
      `
    };

    mailer.sendEmail(emailData.to, emailData.subject, emailData.body)
      .then(response => {
        if (response.status === 'success') {
          console.log('Email sent successfully to ' + emailData.to);
          this.openDialog();
        } else {
          console.error('Failed to send email:', response.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    contactForm.reset();
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      panelClass: 'custom-dialog' // Custom styling class
    });
  }

}
