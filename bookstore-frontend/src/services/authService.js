import wait from '../utils/wait.js';

const NETWORK_DELAY = 250;

const mockUser = {
  id: 'user-001',
  firstName: 'Lan',
  lastName: 'Nguyễn',
  email: 'lan.nguyen@example.com',
  loyaltyPoints: 1280,
  addresses: [
    {
      id: 'addr-01',
      label: 'Nhà riêng',
      detail: '123 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh'
    }
  ]
};

export async function login({ email }) {
  await wait(NETWORK_DELAY);
  if (email !== mockUser.email) {
    throw new Error('Tài khoản không tồn tại');
  }
  return mockUser;
}

export async function logout() {
  await wait(120);
  return true;
}

export async function getProfile() {
  await wait(NETWORK_DELAY);
  return mockUser;
}
