/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { XLargeDirective ,AppComponent} from './app.component';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent, XLargeDirective ],

  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    FormsModule,
     SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    RouterModule.forRoot([], { useHash: false }),

    SharedModule.forRoot(),
   

    SharedModule.forRoot(),
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
