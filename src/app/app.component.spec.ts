import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { PostService } from './post.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let service: any;
  const post = { id: 1, userId: 2, title: 'Title', body: 'Body' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: PostService,
          useValue: {
            getPosts: jasmine.createSpy('getPosts').and.returnValue(of([post])),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
    service = TestBed.inject(PostService);
  });

  it(`should have as title 'Posts'`, () => {
    expect(app.title).toEqual('Posts');
  });

  it('can retrieve posts', (done) => {
    fixture.detectChanges();

    app.posts$?.subscribe((posts) => {
      expect(posts.length).toBe(1);
      expect(posts[0].userId).toBe(post.userId);
      done();
    });
  });
});
