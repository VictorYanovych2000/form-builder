import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface CatalogElement {
  position: string;
  customer: string;
  name: string;
  items: number;
  notes: string;
  ordered: any;
  delivery: any;
  status: boolean;
  description: string;
}

const ELEMENT_DATE: CatalogElement[] = [
  {
    position: '35322',
    customer: 'Burger Bar',
    name: 'BB-243', items: 12,
    notes:'Please deliver',
    ordered: 'data',
    delivery: 'data',
    status: true,
    description: 'Sasha great boy'
  },
  {
    position: '35322',
    customer: 'Burger Bar',
    name: 'BB-243',
    items: 12,
    notes:'Please deliver',
    ordered: 'data',
    delivery: 'data',
    status: true,
    description: 'Sasha crypto-GoD'
  },
  {
    position: '35322',
    customer: 'Burger Bar',
    name: 'BB-243',
    items: 12,
    notes:'Please deliver',
    ordered: 'data',
    delivery: 'data',
    status: true,
    description: 'Sasha GOD'
  },
];


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    trigger('detailExpend', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expended', style({height: '*'})),
      transition('expended <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class CatalogComponent implements OnInit {
  public displayed: string[] = ['position', 'customer', 'name', 'items', 'notes', 'ordered', 'delivery', 'status']
  public data = ELEMENT_DATE;
  public displayWithExpand = [...this.displayed, 'expand'];
  public expandedElement: CatalogElement | null;
  constructor() { }

  ngOnInit(): void {

  }

}

