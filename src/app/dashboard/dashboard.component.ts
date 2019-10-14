import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {FullCalendarModule} from 'primeng/fullcalendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }

  private items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'fa fa-plus' },
        { label: 'Open', icon: 'fa fa-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'fa fa-refresh' },
        { label: 'Redo', icon: 'fa fa-repeat' }
      ]
    }];
  }
}


