import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomularioPage } from './fomulario.page';

describe('FomularioPage', () => {
  let component: FomularioPage;
  let fixture: ComponentFixture<FomularioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FomularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
