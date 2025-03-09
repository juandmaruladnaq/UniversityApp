import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-generic',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: './modal-generic.component.html',
  styleUrl: './modal-generic.component.css',
})
export class ModalGenericComponent {
  @Input() headersTable: string[] = [];
  @Input() titleName = '';
  @Input() value = '';
  @Input() newEntity: any = {}; 

  @Output() createEntity = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) {}

 

  closeModal() {
    this.activeModal.close();
    setTimeout(() => {
      const appRoot = document.querySelector('app-root');
      if (appRoot?.hasAttribute('aria-hidden')) {
        appRoot.removeAttribute('aria-hidden');
      }
    }, 10);
  }

  submit() {
    console.log("entrado a edit: ",this.newEntity);
    this.createEntity.emit(this.newEntity); 
    this.activeModal.close();
  }
}
