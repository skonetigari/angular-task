import { Component, Input } from '@angular/core';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html'
})
export class CardOverviewExample {
  filterData: any;
  @Input() rowData: any;
  name: any;

  value = 'Clear me';
  constructor() {
    this.rowData = [
      {
        id: 1,
        text: 'Terminal instructables',
        category: 'Technical'
      },
      {
        id: 2,
        text: 'Installation guides',
        category: 'Technical'
      },
      {
        id: 3,
        text: 'Career opportunities',
        category: 'Human resources'
      },
      {
        id: 4,
        text: 'Customer inboarding',
        category: 'Financial'
      },
      {
        id: 5,
        text: 'Outlet branding',
        category: 'Marketing'
      },
      {
        id: 6,
        text: 'Accounting procedures',
        category: 'Financial'
      },
      {
        id: 7,
        text: 'Training',
        category: 'Human Resources'
      },
      {
        id: 8,
        text: 'Printing guidance',
        category: 'Marketing'
      },
      {
        id: 9,
        text: 'Technical Support',
        category: 'Technical'
      }
    ];
    this.assignCopy();
  }
  assignCopy() {
    this.filterData = Object.assign([], this.rowData);
  }
  filterDataEvt(evt: any) {
    this.name = evt;
    let searchValue = evt;
    this.filterData = this.rowData.filter((item: any) => {
      return item.category.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
