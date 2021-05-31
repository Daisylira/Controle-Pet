import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { MedicamentosEditModalComponent } from './medicamentos-edit-modal.component';

describe('MedicamentosEditModalComponent', () => {
  let component: MedicamentosEditModalComponent;
  let fixture: ComponentFixture<MedicamentosEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosEditModalComponent ],
      providers: [BsModalService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
