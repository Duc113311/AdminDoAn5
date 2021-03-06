import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [
    FileUploadModule,
    TableModule,
    ToolbarModule,
    CommonModule,
    RatingModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule

  ],
  exports:[

    FileUploadModule,
    TableModule,
    CommonModule,
    ToolbarModule,
    RatingModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule
  ],

})
export class SharedModule { }
