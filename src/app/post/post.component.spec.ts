import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can toggle post and user ids', (done) => {
    component.post = { id: 1, userId: 2, title: 'Title', body: 'Body' };
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const postTile =
      fixture.debugElement.nativeElement.querySelector('.post-tile');

    expect(postTile.classList.contains('clicked')).toBeFalsy();
    const postId = compiled.querySelector('.front.face');
    expect(postId?.textContent?.trim()).toBe('1');
    const userId = compiled.querySelector('.right.face');
    expect(userId?.textContent?.trim()).toBe('2');

    postTile.click();
    fixture.whenStable().then(() => {
      expect(postTile.classList.contains('clicked')).toBeTruthy();
      done();
    });
  });
});
