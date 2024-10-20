import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useMenus } from '../utils/api';
import { menuState } from '../state/state';

export const useMenuItems = () => {
  const setMenus = useSetRecoilState(menuState);
  const { data, isLoading, error } = useMenus();
  useEffect(() => {
    if (data) {
      setMenus(data);
    }
  }, [data, setMenus]);

  return { menus: data, isLoading, error };
};