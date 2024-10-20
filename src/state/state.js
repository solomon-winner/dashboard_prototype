import { atom } from 'recoil';

export const menuState = atom({
  key: 'menuState',
  default: { data: [] },
});

export const expandedKeysState = atom({
  key: 'expandedKeysState',
  default: [],
});

export const formVisibilityState = atom({
  key: 'formVisibilityState',
  default: false,
});

export const selectedItemState = atom({
  key: 'selectedItemState',
  default: null,
});
export const formTypeState = atom({ 
  key: 'formTypeState',
  default: 'update',
});