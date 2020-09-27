import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { HomePageComponent } from './home-page.component'
import { SharedModule } from '@shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
]

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomePageModule {}
