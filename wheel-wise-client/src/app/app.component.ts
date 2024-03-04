import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sidebarVisible: boolean = false;

}
