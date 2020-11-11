import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // Native Template fails on Button mat-icon render with always false. Had to reconstruct based on:
  // https://stackoverflow.com/questions/50525676/angular-6-material-nav-component-template-parse-errors-unexpected-token?rq=1
  /*
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  */

  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  _loading = true;
  public get showLoadingIndicator() {
    return this._loading;
  }
  public set showLoadingIndicator(value) {
    this._loading = value;
  }

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
    ) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._loading = true;
    }
    if (event instanceof NavigationEnd) {
      this._loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._loading = false;
    }
    if (event instanceof NavigationError) {
      this._loading = false;
    }
  }
}
