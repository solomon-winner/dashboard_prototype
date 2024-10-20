import { atom } from 'recoil';

export const formVisibilityState = atom({
  key: 'formVisibilityState',
  default: false,
});

export const expandedKeysState = atom({
  key: 'expandedKeysState',
  default: [],
});