import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NewlistingtableDataSource } from './newlistingtable-datasource';

@Component({
  selector: 'app-newlistingtable',
  templateUrl: './newlistingtable.component.html',
  styleUrls: ['./newlistingtable.component.scss']
})
export class NewlistingtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: NewlistingtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new NewlistingtableDataSource(this.paginator, this.sort);
  }
}
