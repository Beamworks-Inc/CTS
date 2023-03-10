import { RegisterForm, ReviewerRegisterForm } from 'Interface/User';
import RegisterAPI from './RegisterAPI';
/**
 * 이메일은 유일해야하기 떄문에
 * 테스트를 다시 실행하고 에러가 발생할 수 있다.
 * 이 때는 이메일을 바꿔서 다시 테스트를 실행하면 된다.
 */
const defaultURL = 'http://platform.beamworks.co.kr/spring';

describe('RegisterAPI', () => {
  it('register pi', async () => {
    const mockPI: RegisterForm = {
      email: 'pi2@test.com',
      password: 'passowrd',
    };

    const result = await RegisterAPI.pi(mockPI, defaultURL);
    expect(result.status).toBe(200);
  });

  it('register researcher', async () => {
    const mockResearcher: RegisterForm = {
      email: 'researcher2@test.com',
      password: 'passowrd',
    };
    const result = await RegisterAPI.researcher(mockResearcher, defaultURL);
    expect(result.status).toBe(200);
  });

  it('register reviewer', async () => {
    const mockReviewer: ReviewerRegisterForm = {
      email: 'reviewer2@test.com',
      password: 'passowrd',
      info: {
        isRadiologist: 'no',
        hasMoreThan3YearsOfExperience: true,
      },
    };
    const result = await RegisterAPI.reviewer(mockReviewer, defaultURL);
    expect(result.status).toBe(200);
  });
});
