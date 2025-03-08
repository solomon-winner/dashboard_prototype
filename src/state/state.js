import { atom } from 'recoil';

export const isEditingBannerInfoState = atom({
  key: 'isEditingBannerInfoState',
  default: false,
});

export const isAuthenticatedState = atom ({
  key: 'isAuthenticated',
  default: false
});

export const isEditingCompanyInfoState = atom({
  key: 'isEditingCompanyInfoState',
  default: false,
});

export const editingCardIdState = atom({
  key: 'editingCardIdState',
  default: null,
});

export const editingAlbumState = atom({
  key: 'editingAlbumState',
  default: null,
});

export const editingSongState = atom({
  key: 'editingSongIdState',
  default: null,
});

export const titleState = atom({
  key: 'titleState',
  default: '',
});

export const contentState = atom({
  key: 'contentState',
  default: '',
});

export const companyInfoState = atom({
  key: 'companyInfoState',
  default: '',
});

export const generalInfoState = atom({
  key: 'general',
  default: {}
})
export const cardInfoState = atom({
  key: 'cardInfoState',
  default: []
});

export const cardTitleState = atom({
  key: 'cardTitleState',
  default: 'Join the Mission of Spreading God\'s Love',
});

export const songsState = atom({
  key: 'songsState',
  default: [],
});

export const albumsState = atom({
  key: 'albumsState',
  default: [],
});

export const testimoniesState = atom({
  key: 'testimoniesState',
  default: [],
});

