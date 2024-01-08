import 'reflect-metadata';
import { validateSession } from 'tests/assertions';
import { Factory } from 'rosie';
import SessionLocal from '.';

describe('SessionLocal', () => {
  const mockLocalStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  };

  const getInstance = () => {
    const sessionLocal = new SessionLocal();
    sessionLocal.localStorage = mockLocalStorage;
    return sessionLocal;
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('#create', () => {
    const params = {
      accessToken: 'access',
      refreshToken: 'refresh',
      type: 'Bearer' as const,
      expiresIn: 1000,
    };

    it('returns a session object', async () => {
      const subject = getInstance();

      const res = await subject.create(params);
      validateSession(res);
    });

    it('calls the local storage set method', async () => {
      const subject = getInstance();

      await subject.create(params);
      expect(mockLocalStorage.setItem).toHaveBeenCalled();
    });

    it('passes the right params to local storage', async () => {
      const subject = getInstance();

      await subject.create(params);
      const key = mockLocalStorage.setItem.mock.calls[0][0];
      const args = JSON.parse(mockLocalStorage.setItem.mock.calls[0][1]);
      expect(key).toEqual('session');
      expect(args).toHaveProperty('accessToken', params.accessToken);
      expect(args).toHaveProperty('refreshToken', params.refreshToken);
      expect(args).toHaveProperty('type', params.type);
      expect(args).toHaveProperty('expiresIn', params.expiresIn);
    });
  });

  describe('#get', () => {
    const mockSession = Factory.build('session');
    beforeEach(() => {
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockSession));
    });

    it('returns a session object', async () => {
      const subject = getInstance();
      const res = await subject.get();
      validateSession(res);
    });

    it('calls the local storage set method', async () => {
      const subject = getInstance();
      await subject.get();
      expect(mockLocalStorage.getItem).toHaveBeenCalled();
    });
  });

  describe('#delete', () => {
    const subject = getInstance();
    it('deletes session object', async () => {
      await subject.delete();
      expect(mockLocalStorage.removeItem).toHaveBeenCalled();
    });
    it('passes the right params to local', async () => {
      await subject.delete();
      const key = mockLocalStorage.removeItem.mock.calls[0][0];
      expect(key).toEqual('session');
    });
  });
});
