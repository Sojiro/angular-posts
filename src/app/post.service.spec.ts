import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';


describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get posts', (done) => {
    service.getPosts().subscribe((posts) => {
      expect(posts).toBeDefined();
      expect(posts.length).toEqual(1);
      expect(posts[0].title).toContain('Title');
      done();
    });

    let req = httpMock.expectOne(service.API_URL);
    req.flush([
      {
        userId: 1,
        id: 1,
        title: 'Title',
        body: 'Post body',
      },
    ]);

    httpMock.verify();
  });
});
