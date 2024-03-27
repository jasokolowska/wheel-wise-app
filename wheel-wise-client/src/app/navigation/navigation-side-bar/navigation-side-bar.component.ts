import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Sidebar, SidebarModule} from "primeng/sidebar";
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {StyleClassModule} from "primeng/styleclass";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-navigation-side-bar',
  standalone: true,
  imports: [
    SidebarModule,
    AvatarModule,
    ButtonModule,
    RouterLink,
    StyleClassModule,
    RippleModule
  ],
  templateUrl: './navigation-side-bar.component.html',
  styleUrl: './navigation-side-bar.component.scss'
})
export class NavigationSideBarComponent {
  @Input() sidebarVisible: boolean = false;
  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
    this.closeSidebar.emit(true);
  }
}
