import { TestBed } from '@angular/core/testing';
import {singleCategoryService } from './singleCategory.service'; // Ensure this matches the service file name

describe('ProductService', () => {
  let service: singleCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(singleCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
