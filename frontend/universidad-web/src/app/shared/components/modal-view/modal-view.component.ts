import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-view',
  imports: [CommonModule, NgbModule],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.css',
})
export class ModalViewComponent {
  @Input() titleName = ''; 
  @Input() entityData: any = {}; 
  
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isArray(key: string): boolean {
    return Array.isArray(this.entityData[key]);
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
  }
}