import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzDividerModule } from 'ng-zorro-antd/divider'

const modules = [
  NzGridModule,
  NzButtonModule,
  NzMenuModule,
  NzIconModule,
  NzAvatarModule,
  NzPopconfirmModule,
  NzDropDownModule,
  NzLayoutModule,
  NzPopoverModule,
  NzDividerModule,
]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: modules,
})
export class NgZorroModule {}
