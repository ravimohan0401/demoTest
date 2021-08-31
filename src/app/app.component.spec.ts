import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log("Value for test content " +compiled.querySelector('.content').textContent);
    
    expect(compiled.querySelector('.content').textContent).toContain('test');
  });
  it('should have value in array',()=>{
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.arr.length).toBeGreaterThan(1);
  });
  fit('should click save button',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const p = fixture.debugElement.nativeElement.querySelector('p')
    fixture.detectChanges();
    // let buttonElement = fixture.debugElement.query(By.css('set-button'));
    let buttonElement = fixture.debugElement.nativeElement.querySelector('.set-button');
    spyOn(component,'setButton');
    buttonElement.click();
    fixture.detectChanges();
    // fixture.whenStable().then(()=>{
      
    // })
    expect(component.setButton).toHaveBeenCalled();
    // expect(p.textContent).toBe("Chandran");
  })
});
