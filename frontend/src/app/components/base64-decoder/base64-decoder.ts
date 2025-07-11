/* src/app/components/base64-decoder/base64-decoder.component.ts */

import { Component } from '@angular/core';

// Importaciones necesarias para el componente standalone
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: false,
  selector: 'app-base64-decoder',
  templateUrl: './base64-decoder.html',
  styleUrls: ['./base64-decoder.scss']
})
export class Base64DecoderComponent {

  encodedText: string = 'SG9sYSBtdW5kbyEh';
  decodedText: string = '';
  errorMessage: string | null = null;
  
  constructor() {
    this.decode();
  }

  decode(): void {
    this.errorMessage = null;
    if (!this.encodedText || this.encodedText.trim() === '') {
      this.decodedText = '';
      return;
    }
    try {
      this.decodedText = atob(this.encodedText);
    } catch (error) {
      this.decodedText = '';
      this.errorMessage = 'El texto introducido no es un string Base64 válido.';
    }
  }

  clear(): void {
    this.encodedText = '';
    this.decodedText = '';
    this.errorMessage = null;
  }
}