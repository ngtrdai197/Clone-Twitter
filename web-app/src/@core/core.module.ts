import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { TranslocoModule } from '@ngneat/transloco'

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, TranslocoModule],
  exports: [HttpClientModule, TranslocoModule],
})
export class CoreModule {}
