import wait from '../utils/wait.js';
import { serviceStatus } from './mockData.js';

export async function getServiceStatus() {
  await wait(120);
  return serviceStatus;
}
