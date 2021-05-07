import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Ng Task Manager';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log('Add Task');
  }

}
