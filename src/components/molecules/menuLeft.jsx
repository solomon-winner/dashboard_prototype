import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MenuTree from './menuTree';
import { transformMenuData } from '../../utils/transformData';
import { formVisibilityState, expandedKeysState } from '../../state/visibilityState';
import { menuState } from '../../state/state';

const MenuLeft = () => {
  // const menus = useRecoilValue(menuState);
  // // const selectedItem = useRecoilValue(selectedItemState);
  // const treeData = Array.isArray(menus.data) ? transformMenuData(menus.data) : [];
  // const setExpandedKeys = useSetRecoilState(expandedKeysState);
  // const handleExpandAll = () => {
  //   const getAllKeys = (data) => {
  //     let keys = [];
  //     data.forEach(item => {
  //       keys.push(item.key);
  //       if (item.children) {
  //         keys = keys.concat(getAllKeys(item.children));
  //       }
  //     });
  //     return keys;
  //   };
  //   const allKeys = getAllKeys(treeData);
  //   setExpandedKeys(allKeys);
  // };

  // const handleCollapseAll = () => {
  //   setExpandedKeys([]);
  // };
  return (
    <div>
      <div className="text-sm">
        <button
          className="bg-black text-white p-2 mt-2 rounded-2xl w-[8rem]"
          // onClick={handleExpandAll}
        >
          Expand All
        </button>
        <button
          className="bg-gray-100 text-black p-2 mt-2 ml-2 rounded-2xl w-[8rem]"
          // onClick={handleCollapseAll}
        >
          Collapse All
        </button>
      </div>
      <div className="mt-4">
        {/* <MenuTree /> */}
      </div>
    </div>
  );
};

export default MenuLeft;