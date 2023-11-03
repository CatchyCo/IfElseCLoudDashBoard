import { TestBed } from '@angular/core/testing';

import { DashBoardDataService } from './dash-board-data.service';

describe('DashBoardDataService', () => {
  let service: DashBoardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBoardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
