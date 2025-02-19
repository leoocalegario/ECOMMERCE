import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<void> {
  return (): Promise<void> => {
    return keycloak.init({
      config: {
        url: 'http://192.168.56.104/auth',
        realm: 'wavemotors',
        clientId: 'wave-backend',
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }).then(() => {
      console.log('Keycloak inicializado com sucesso');
    }).catch(err => {
      console.error('Falha ao inicializar o Keycloak', err);
      throw err; // opcional, para tratamento de erro
    });
  };
}
