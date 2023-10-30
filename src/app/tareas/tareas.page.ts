import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  isWeekday = (dateString: string)=>{
    const date = new Date(dateString);
    const utcDay = date.getUTCDate();

    return utcDay !== 0 && utcDay !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}
