import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-master',
  templateUrl: './list-master.component.html',
  styleUrls: ['./list-master.component.css']
})
export class ListMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert('call');
  }

}
