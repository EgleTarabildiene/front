import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KmiComponent } from './components/kmi/kmi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KmiComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
