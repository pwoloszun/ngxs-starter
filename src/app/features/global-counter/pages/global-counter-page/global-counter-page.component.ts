import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { actions, GlobalCounterState } from 'src/app/store/global-counter';

@Component({
  selector: 'app-global-counter-page',
  templateUrl: './global-counter-page.component.html',
  styleUrls: ['./global-counter-page.component.css']
})
export class GlobalCounterPageComponent implements OnInit {

  @Select(GlobalCounterState.counterValue) counterValue$!: Observable<number>;

  constructor(private store: Store) { }

  incrementHandler() {
    this.store.dispatch(new actions.IncrementGlobalCounter(5));
  }

  ngOnInit(): void {
  }

}
