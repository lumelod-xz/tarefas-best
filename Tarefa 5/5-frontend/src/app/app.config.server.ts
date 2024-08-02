import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppServerModule } from './app.server.module';
import { AppComponent } from './app.component';
import { provideServerRendering } from '@angular/platform-server';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    ServerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideServerRendering()
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
