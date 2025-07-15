// Import Angular's platform browser dynamic function
// This is used to bootstrap (launch) the Angular application in a browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
// Import the root module of the application
import { AppModule } from './app/app.module';

// Bootstrap the Angular application with the root module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Catch and log any errors during bootstrap
