import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'da-notes-2964e',
          appId: '1:327621278469:web:d7cdee12ccfc9a8bef156c',
          storageBucket: 'da-notes-2964e.appspot.com',
          apiKey: 'AIzaSyBpJ7lAuizhju381E2RKmZceX8o-Gy3rq0',
          authDomain: 'da-notes-2964e.firebaseapp.com',
          messagingSenderId: '327621278469',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
