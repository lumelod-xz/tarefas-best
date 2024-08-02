import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// Assumindo que você não precisa de appConfig, já que não é uma configuração padrão
// import { appConfig } from './app/app.config'; 

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
