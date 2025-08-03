import { TestBed } from '@angular/core/testing';
import { AppStoreService } from './app-store.service';
import { User } from './models/User';

describe('AppStoreService', () => {
  let service: AppStoreService;

  const mockUser: User = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    role_id: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStoreService]
    });
    service = TestBed.inject(AppStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('user$ observable', () => {
    it('should emit default user on subscription', (done) => {
      service.user$.subscribe(user => {
        expect(user).toEqual({
          id: 0,
          name: 'Anonymous',
          role_id: 2,
          email: '',
          password: ''
        });
        done();
      });
    });

    it('should emit updated user when setUser is called', (done) => {
      let callCount = 0;
      service.user$.subscribe(user => {
        callCount++;
        if (callCount === 1) {
          // First call should be default user
          expect(user).toEqual({
            id: 0,
            name: 'Anonymous',
            role_id: 2,
            email: '',
            password: ''
          });
        } else if (callCount === 2) {
          // Second call should be the updated user
          expect(user).toEqual(mockUser);
          done();
        }
      });

      service.setUser(mockUser);
    });

    it('should emit multiple users when setUser is called multiple times', (done) => {
      const users: User[] = [];
      let callCount = 0;

      service.user$.subscribe(user => {
        callCount++;
        users.push(user);
        
        if (callCount === 3) {
          expect(users[0]).toEqual({
            id: 0,
            name: 'Anonymous',
            role_id: 2,
            email: '',
            password: ''
          });
          expect(users[1]).toEqual(mockUser);
          expect(users[2]).toEqual({ ...mockUser, name: 'Updated User' });
          done();
        }
      });

      service.setUser(mockUser);
      service.setUser({ ...mockUser, name: 'Updated User' });
    });
  });

  describe('setUser', () => {
    it('should update the user state', (done) => {
      service.setUser(mockUser);
      
      service.user$.subscribe(user => {
        expect(user).toEqual(mockUser);
        done();
      });
    });

    it('should handle null user', (done) => {
      service.setUser(null as any);
      
      service.user$.subscribe(user => {
        expect(user).toBeNull();
        done();
      });
    });

    it('should handle undefined user', (done) => {
      service.setUser(undefined as any);
      
      service.user$.subscribe(user => {
        expect(user).toBeUndefined();
        done();
      });
    });
  });

  describe('getUser', () => {
    it('should return current user value', () => {
      service.setUser(mockUser);
      const currentUser = service.getUser();
      expect(currentUser).toEqual(mockUser);
    });

    it('should return default user when no user is set', () => {
      const currentUser = service.getUser();
      expect(currentUser).toEqual({
        id: 0,
        name: 'Anonymous',
        role_id: 2,
        email: '',
        password: ''
      });
    });
  });

  describe('getInitUser', () => {
    it('should return default user when no user in localStorage', () => {
      const defaultUser = service.getInitUser();
      expect(defaultUser).toEqual({
        id: 0,
        name: 'Anonymous',
        role_id: 2,
        email: '',
        password: ''
      });
    });
  });
}); 