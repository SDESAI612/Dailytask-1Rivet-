import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { ContainerComponent } from './container/container';
import { DynamicComponent } from './dynamic/dynamic';
import { PresentationComponent } from './container/presentation/presentation';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [ContainerComponent, DynamicComponent, PresentationComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    RouterModule,
    PortalModule,
    OverlayModule,
    
  ],
  entryComponents:[DynamicComponent]
})
export class DynamicModule { }
