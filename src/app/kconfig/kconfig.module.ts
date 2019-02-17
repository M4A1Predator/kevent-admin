import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { KConfigRoutingModule } from './kconfig-routing.module';
import { KConfigComponent } from './kconfig.component';

@NgModule({
  declarations: [MainPageComponent, KConfigComponent],
  imports: [
    CommonModule,
    KConfigRoutingModule
  ],
  bootstrap: [KConfigComponent]
})
export class KConfigModule { }
