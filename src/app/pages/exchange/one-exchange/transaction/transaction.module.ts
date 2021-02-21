import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from 'src/directives/directive.module';

@NgModule({
  declarations: [TransactionComponent, TransactionViewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  exports: [TransactionComponent]
})
export class TransactionModule { }
