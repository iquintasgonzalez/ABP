import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }
     

  data: any;
  events: any[];
  items : MenuItem[];

    ngOnInit() {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2016-01-01"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2016-01-10"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }
        ];
        this.items = [
          {
              label: 'File',
              icon: 'pi pi-fw pi-file',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {separator:true},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          },
          {
              label: 'Help',
              icon: 'pi pi-fw pi-question',
              items: [
                  {
                      label: 'Contents'
                  },
                  {
                      label: 'Search', 
                      icon: 'pi pi-fw pi-search', 
                      items: [
                          {
                              label: 'Text', 
                              items: [
                                  {
                                      label: 'Workspace'
                                  }
                              ]
                          },
                          {
                              label: 'File'
                          }
                  ]}
              ]
          },
          {
              label: 'Actions',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Save', icon: 'pi pi-fw pi-save'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                      ]
                  },
                  {
                      label: 'Other',
                      icon: 'pi pi-fw pi-tags',
                      items: [
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          },
          {separator:true},
          {
              label: 'Quit', icon: 'pi pi-fw pi-times'
          }
      ];
    }
 
}




