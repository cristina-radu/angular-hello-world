import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  schoolName = 'Tudor Vianu';
  rootStudentName = 'Gigi Becali';
  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(event): void {
    this.schoolName = event.target.value;
  }

  onStudentNameChanged(event){
    console.log('onStudentNameChanged');
    console.log(event);
    this.rootStudentName = event;
  }
}
