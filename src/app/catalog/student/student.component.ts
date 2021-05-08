import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentName: string;
  @Output() studentNameChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event){
    console.log('on input');
    this.studentNameChanged.emit(event.target.value);
  }
}
