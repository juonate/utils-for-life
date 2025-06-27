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
  selector: 'app-base64-encoder',
  templateUrl: './base64-encoder.html',
  styleUrl: './base64-encoder.scss'
})
export class Base64Encoder {

  encodedText: string = 'SG9sYSBtdW5kbyEh';
  decodedText: string = '';
  errorMessage: string | null = null;

  constructor() {
    this.encode();
  }

  encode(): void {
    this.errorMessage = null;
    if (!this.decodedText || this.decodedText.trim() === '') {
      this.encodedText = '';
      return;
    }
    this.encodedText = btoa(this.decodedText);
  }

  clear(): void {
    this.encodedText = '';
    this.decodedText = '';
    this.errorMessage = null;
  }

}
