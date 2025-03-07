import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalGenericComponent } from '../modal-generic/modal-generic.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-crud-template',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './crud-template.component.html',
  styleUrl: './crud-template.component.css',
})
export class CrudTemplateComponent {
  @Input() title = '';
  @Input() headersTable: string[] = [];
  @Input() data: any[] = [];
  @Input() titleName = '';

  @Output() entityCreated = new EventEmitter<any>();
  @Output() entityDeleted = new EventEmitter<number>();
  @Output() entityUpdated = new EventEmitter<any>();

  selectedEntityIds: number[] = [];

  constructor(private modalService: NgbModal) {}

  openGenericModal(title: string, action: string, entity?: any) {
    const modalRef = this.modalService.open(ModalGenericComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
  
    modalRef.componentInstance.titleName = title;
    modalRef.componentInstance.value = action;
    modalRef.componentInstance.headersTable = this.headersTable;
    modalRef.componentInstance.newEntity = entity ? { ...entity } : {}; 
  
    modalRef.componentInstance.createEntity.subscribe((updatedEntity: any) => {
      if (action === 'edit') {
        this.entityUpdated.emit(updatedEntity); 
      } else {
        this.entityCreated.emit(updatedEntity); 
      }
    });
  }
  

  openDeleteModal(entityIds: number[]) {
    const modalRef = this.modalService.open(ModalDeleteComponent, {
      centered: true,
    });
    modalRef.componentInstance.titleName = 'Delete Departments';
    modalRef.componentInstance.entityIds = entityIds;

    modalRef.componentInstance.confirmDelete.subscribe(() => {
      entityIds.forEach((id) => {
        this.entityDeleted.emit(id);
      });

      this.selectedEntityIds = [];
    });
  }

  toggleSelection(entityId: number) {
    const index = this.selectedEntityIds.indexOf(entityId);
    if (index === -1) {
      this.selectedEntityIds.push(entityId);
    } else {
      this.selectedEntityIds.splice(index, 1);
    }
  }
}
