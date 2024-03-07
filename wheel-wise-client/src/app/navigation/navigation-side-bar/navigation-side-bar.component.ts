import {Component, Input, ViewChild} from '@angular/core';
import {Sidebar, SidebarModule} from "primeng/sidebar";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-side-bar',
  standalone: true,
  imports: [
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './navigation-side-bar.component.html',
  styleUrl: './navigation-side-bar.component.scss'
})
export class NavigationSideBarComponent {
  @Input() sidebarVisible: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }
}
