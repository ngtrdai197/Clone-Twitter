import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SideMenuComponent } from './side-menu/side-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NgZorroModule } from '@/ng-zorro/ng-zorro.module'

const shared = [SideMenuComponent, PageNotFoundComponent]

@NgModule({
  declarations: shared,
  imports: [CommonModule, NgZorroModule],
  exports: [...shared, NgZorroModule],
})
export class SharedModule {}
