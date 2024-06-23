import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'primeng/carousel';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LoaderInterceptor } from './app/interceptors/loader.interceptor';
import { AddTokenHeaderInterceptor } from './app/interceptors/add-token-header.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import {routes } from './app/app-routes'
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule, CarouselModule, FormsModule, ToastrModule.forRoot(), ProgressSpinnerModule, ToastModule, MessagesModule),
        provideRouter(routes),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AddTokenHeaderInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
