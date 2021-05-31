import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { PetsEditComponent } from './pets-edit.component';

describe('PetsEditComponent', () => {
  let component: PetsEditComponent;
  let fixture: ComponentFixture<PetsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsEditComponent ],
      providers: [BsModalService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
