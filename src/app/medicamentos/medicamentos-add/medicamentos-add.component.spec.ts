import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { MedicamentosAddComponent } from './medicamentos-add.component';

describe('MedicamentosAddComponent', () => {
  let component: MedicamentosAddComponent;
  let fixture: ComponentFixture<MedicamentosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosAddComponent, BsModalRef ],
      providers: [BsModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
