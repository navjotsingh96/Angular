import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectComponent } from './data-protect/data-protect.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protect', component: DataProtectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
