import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   @Input() hero;
  @Output() chidldata:EventEmitter<any>=new EventEmitter();
   
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.chidldata.emit("this data comming from child (Test componet)");
  }
}
