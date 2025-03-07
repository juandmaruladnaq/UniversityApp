import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete',
  imports: [CommonModule, NgbModule],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css',
})
export class ModalDeleteComponent {
  @Input() titleName = '';
  @Output() confirmDelete = new EventEmitter<number>();
  @Input() entityIds: number[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  delete() {
    this.confirmDelete.emit();
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }
}
