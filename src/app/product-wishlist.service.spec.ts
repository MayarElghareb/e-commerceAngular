import { TestBed } from '@angular/core/testing';

import { ProductWishlistService } from './product-wishlist.service';

describe('ProductWishlistService', () => {
  let service: ProductWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
