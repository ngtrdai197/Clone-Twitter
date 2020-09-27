import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzPopoverModule } from 'ng-zorro-antd/popover'

import { SideMenuComponent } from './side-menu/side-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const COMPONENTS = [SideMenuComponent, PageNotFoundComponent]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    NzAvatarModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
    NzPopoverModule,
    NzPopconfirmModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
