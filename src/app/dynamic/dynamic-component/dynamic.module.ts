import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from '../dynamic-routing.module';
import { ContainerComponent } from '../container/container';
import { Presentation } from '../container/presentation/presentation';


@NgModule({
  declarations: [ContainerComponent, Presentation],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
