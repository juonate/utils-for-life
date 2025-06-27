// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64DecoderComponent } from './components/base64-decoder/base64-decoder';
import { Base64Encoder } from './components/base64-encoder/base64-encoder';

const routes: Routes = [
  { path: 'decoder', component: Base64DecoderComponent },
  { path: 'encoder', component: Base64Encoder },
  { path: '', redirectTo: '/decoder', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/decoder' } // Redirigir si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }