import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { TranslocoRootModule } from './transloco-root.module'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CoreModule } from '@core/core.module'
import { AppComponent } from './app.component'
import { SharedModule } from '@shared/shared.module'
import { routes } from './app.routes'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TranslocoRootModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
