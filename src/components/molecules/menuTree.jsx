import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Tree } from 'antd';
import { RightOutlined, DownOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { menuState, expandedKeysState, formVisibilityState, selectedItemState, formTypeState } from '../../state/state';
import { transformMenuData } from '../../utils/transformData';
import { useDeleteMenu } from '../../utils/api';

const MenuTree = () => {
  const menus = useRecoilValue(menuState);
  const setMenus = useSetRecoilState(menuState);
  const treeData = Array.isArray(menus.data) ? transformMenuData(menus.data) : [];
  const expandedKeys = useRecoilValue(expandedKeysState);
  const setExpandedKeys = useSetRecoilState(expandedKeysState);
  const setFormVisibility = useSetRecoilState(formVisibilityState);
  const selectedItem = useRecoilValue(selectedItemState); 
  const setSelectedItem = useSetRecoilState(selectedItemState);
  const deleteMenuMutation = useDeleteMenu();
  const [parentItem, setParentItem] = useState(null); 
  const [depth, setDepth] = useState(0); 
  const setFormType = useSetRecoilState(formTypeState); 

  const handleExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
  };

  const handleSelect = (selectedKeys, info) => {
    setFormVisibility(true);
    setParentItem(info.node);
    setDepth(info.node.depth);
    setSelectedItem(info.node);  
    setFormType('update'); 
  };

  const handleAddClick = (e) => {
    e.stopPropagation(); 
    setSelectedItem({ parentId: parentItem.key, depth: depth + 1});
    setFormVisibility(true); 
    setFormType('add'); 
  };

  const handleDeleteClick = (node) => {  
    if (!node.key) {
      console.error('Node key is undefined');
      return;
    }

    deleteMenuMutation.mutate(node.key, {
      onSuccess: () => {
        const deleteNode = (data, key) => {
          return data.filter(item => {
            if (item.key === key) {
              return false;
            }
            if (item.children) {
              item.children = deleteNode(item.children, key);
            }
            return true;
          });
        };

        const updatedData = deleteNode(treeData, node.key);
        setMenus({ data: updatedData });
        setSelectedItem(null);
      },
      onError: (error) => {
        console.error('Failed to delete node:', error);
      },
    });
  };

  const titleRender = (node) => (
    <div className="flex justify-between items-center">
      <span className="mr-4">{node.title}</span>
      {selectedItem && selectedItem.key === node.key && ( 
        <div className="flex space-x-4">
          <div onClick={(e) => handleAddClick(e)} className="flex items-center justify-center w-6 h-6 rounded-full bg-[#253BFF] text-white">
            <PlusOutlined title='add child item to this menu'/>
          </div>
          <DeleteOutlined title="delete the item" onClick={() => handleDeleteClick(node)} />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex">
      <Tree
        showLine={{ showLeafIcon: false }}
        expandedKeys={expandedKeys}
        onExpand={handleExpand}
        onSelect={handleSelect}
        switcherIcon={({ expanded }) =>
          expanded ? <DownOutlined /> : <RightOutlined />
        }
        treeData={treeData}
        titleRender={titleRender}
      />
    </div>
  );
};

export default MenuTree;