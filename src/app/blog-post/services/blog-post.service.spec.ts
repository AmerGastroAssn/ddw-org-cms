import { TestBed } from '@angular/core/testing';

import { BlogPostService } from './blog-post.service';

describe('CardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostService = TestBed.get(BlogPostService);
    expect(service).toBeTruthy();
  });
});
