import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>✅ Success!</h2>
      <mat-dialog-content>
        <p>Your message has been sent successfully!</p>
      </mat-dialog-content>
      <mat-dialog-actions align="center">
        <button mat-button class="close-button" (click)="close()">OK</button>
      </mat-dialog-actions>
    </div>
  `,
  imports: [
    MatDialogContent,
    MatDialogActions
  ],
  styles: [`
    .dialog-container {
      text-align: center;
      padding: 20px;
      border-radius: 15px;
      background: #f2f2f2; /* Light grey background */
      color: #333;
      font-family: 'Arial', sans-serif;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      font-size: 18px;
    }

    .close-button {
      background-color: #4caf50;
      color: white;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 5px;
      transition: 0.3s ease;
    }

    .close-button:hover {
      background-color: #45a049;
    }
  `]
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
