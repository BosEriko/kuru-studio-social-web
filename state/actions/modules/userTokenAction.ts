// ANCHOR: Constant Import
import { USER_TOKEN_CONSTANT } from '@state/constants';

// ANCHOR: User Token Action
export const userTokenAction = (token: string | null) => ({
  type: USER_TOKEN_CONSTANT,
  payload: token,
})
