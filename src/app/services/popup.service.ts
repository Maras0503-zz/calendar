import { DayOptionsComponent } from './../components/day-options/day-options.component';
import { Injectable, ComponentFactoryResolver, Inject, ReflectiveInjector } from '@angular/core';

@Injectable()
export class PopupService {
  containerRef;
  popupRef;
  year;
  month;
  screenX;
  screenY;
  parameter;
  component;
  popupQty = 0;
  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setContainerRef(containerRef) {
    this.containerRef = containerRef;
  }
  setPopupRef(popupRef) {
    this.popupRef = popupRef;
  }
  addDynamicComponent() {
    if (this.popupQty === 0) {
    const factory = this.factoryResolver
      .resolveComponentFactory(this.popupRef);
    this.component = factory
      .create(this.containerRef.parentInjector);
    this.containerRef.insert(this.component.hostView);
    this.popupQty = 1;
    }
  }
  deleteComponent() {
    this.component.destroy();
    this.popupQty = 0;
  }

}
