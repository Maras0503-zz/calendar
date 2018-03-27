import { DayOptionsComponent } from './../components/day-options/day-options.component';
import { Injectable, ComponentFactoryResolver, Inject, ReflectiveInjector } from '@angular/core';

@Injectable()
export class PopupService {
  year;
  month;
  day;
  popupComponentX; // position X of popupComponent
  popupComponentY; // position Y of popupComponent
  optionsComponentX; // position X of optionsComponent
  optionsComponentY; // position Y of optionsComponent
  optionsComponent; // optionsComponent object;
  popupComponent; // popupComponent object;
  optionsCounter = 0; // optionsComponent exists?
  popupCounter = 0; // popupComponent exists?
  parentContainer; // define where to put created component
  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setParentContainerRef(containerRef) {
    this.parentContainer = containerRef;
  }

  addDynamicOptionsComponent(optionsRef, containerRef) {
    if (this.optionsCounter === 0) {
    const factory = this.factoryResolver
      .resolveComponentFactory(optionsRef);
    this.optionsComponent = factory
      .create(containerRef.parentInjector);
    containerRef.insert(this.optionsComponent.hostView);
    this.optionsCounter = 1;
    }
  }
  addDynamicPopupComponent(popupRef, containerRef) {
    if (this.popupCounter === 0) {
    const factory = this.factoryResolver
      .resolveComponentFactory(popupRef);
    this.popupComponent = factory
      .create(containerRef.parentInjector);
    containerRef.insert(this.popupComponent.hostView);
    this.popupCounter = 1;
    }
  }
  deletePopupComponent() {
    this.popupComponent.destroy();
    this.popupCounter = 0;
  }
  deleteOptionComponent() {
    this.optionsComponent.destroy();
    this.optionsCounter = 0;
  }

}
