import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  loading: Boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingServ: LoadingService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingServ.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
