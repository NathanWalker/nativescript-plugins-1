import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ColorWheelComponent } from './color-wheel.component';
import { NativeScriptColorWheelModule } from '@sergeymell/color-wheel/angular';

@NgModule({
  imports: [
    NativeScriptColorWheelModule,
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: ColorWheelComponent }])],
  declarations: [ColorWheelComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ColorWheelModule {
}
