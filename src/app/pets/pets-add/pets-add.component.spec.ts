import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { PetsAddComponent } from './pets-add.component';

describe('PetsAddComponent', () => {
  let component: PetsAddComponent;
  let fixture: ComponentFixture<PetsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsAddComponent, 
         FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
