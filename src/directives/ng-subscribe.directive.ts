import { ChangeDetectorRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export class NgSubscribeContext {
  $implicit = null;
  ngSubscribe = null;
}

@Directive({
  selector: '[ngSubscribe]'
})
export class NgSubscribeDirective {

  private observable: Observable<any> = new Observable();
  private context: NgSubscribeContext = new NgSubscribeContext();
  private subscription: Subscription = new Subscription();

  @Input()
  set ngSubscribe(inputObservable: Observable<any>) {
    if (this.observable !== inputObservable) {
      this.observable = inputObservable;
      this.subscription && this.subscription.unsubscribe();

      this.subscription = this.observable.subscribe(value => {
        this.context.ngSubscribe = value;
        this.cdr.markForCheck();
      });

    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
