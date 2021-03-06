import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'color-wheel', loadChildren: () => import('./plugin-demos/color-wheel.module').then((m) => m.ColorWheelModule) },
	{ path: 'nativescript-svg', loadChildren: () => import('./plugin-demos/nativescript-svg.module').then((m) => m.NativescriptSvgModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
