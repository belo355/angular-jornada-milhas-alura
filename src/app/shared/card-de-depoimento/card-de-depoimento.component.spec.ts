import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeDepoimentoComponent } from './card-de-depoimento.component';

describe('CardDeDepoimentoComponent', () => {
  let component: CardDeDepoimentoComponent;
  let fixture: ComponentFixture<CardDeDepoimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeDepoimentoComponent]
    });
    fixture = TestBed.createComponent(CardDeDepoimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
