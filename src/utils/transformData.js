export const transformMenuData = (menus) => {
    if (!Array.isArray(menus)) {
      return [];
    }
    return menus.map(menu => ({
      title: menu.name,
      key: menu._id,
      parentId: menu.parentId || null,
      depth: menu.depth,
      children: menu.children ? transformMenuData(menu.children) : [],
    }));
  };
