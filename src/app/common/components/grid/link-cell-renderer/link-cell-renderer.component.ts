import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from '@ag-grid-community/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-cell-renderer',
  templateUrl: './link-cell-renderer.component.html',
  styleUrls: ['./link-cell-renderer.component.scss']
})
export class LinkCellRendererComponent implements ICellRendererAngularComp, OnInit {

  constructor() { }

  public params: any;

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    console.log(params);
  }

  ngOnInit(): void {
  }

}
