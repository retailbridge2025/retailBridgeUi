import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ObjectiveComponent} from './components/objective/objective.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObjectiveComponent, ContactUsComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'retailbridge';
  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
