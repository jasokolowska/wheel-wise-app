import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {NavigationSideBarComponent} from "./navigation/navigation-side-bar/navigation-side-bar.component";
import {EventsModule} from "./events/events.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, ButtonModule, NavigationSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sidebarVisible = false;
}
