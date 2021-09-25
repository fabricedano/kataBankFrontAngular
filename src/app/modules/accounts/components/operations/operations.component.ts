import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'rxjs/operators';
import { IOperation } from '../../shared/models/operation.model.i';
import { IOperationListState } from '../../shared/states/operations-list.state.i';
import { getOperationsListSelector } from '../../shared/selectors/operations-list.selector';
import * as moment from 'moment';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  public form: FormGroup;
  public moment: any = moment;
  public operations$: Observable<IOperation[]> = new Observable();
  public displayedColumns: string[] = ['type', 'date', 'amount'];
  public dataSource = new MatTableDataSource<IOperation>();
  private accountId: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<IOperationListState>, private route: ActivatedRoute) {
    this.form = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
     this.accountId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch({type: 'LOAD_OPERATIONS', payload: {
      accountId : this.accountId, startDate: undefined, endDate: undefined, localDate: new Date()
      }
    });
    this.store.pipe(select(getOperationsListSelector), filter(operations => !!operations)).subscribe(
      data => {
        this.dataSource.data = data; 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  public searchOperations(value : any): void{
    this.store.dispatch({type: 'LOAD_OPERATIONS', payload: {
      accountId : this.accountId, startDate: value.startDate, endDate: value.endDate, localDate: undefined
      }
    });
  }
}
