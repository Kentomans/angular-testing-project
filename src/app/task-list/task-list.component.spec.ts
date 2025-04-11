import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';


describe('TaskListComponent', () => {
  let fixture: ComponentFixture<TaskListComponent>;
  let component: TaskListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports:[TaskListComponent]
      // Declara ambos componentes
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente TaskListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una lista de tareas usando TaskItemComponent', () => {
    component.tasks = ['Tarea 1', 'Tarea 2'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const taskItems = compiled.querySelectorAll('app-task-item');
    expect(taskItems.length).toBe(2);
  });

});
