import { Component, OnInit,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  async LoadListMaster(){
    this.vcr.clear();
    const {ListMasterComponent} =await import('src/app/list-master/list-master.component')
    this.vcr.createComponent(
this.cfr.resolveComponentFactory(ListMasterComponent)
    )
  }

}
