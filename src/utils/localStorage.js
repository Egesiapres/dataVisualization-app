export const setItem = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};

export const getItem = itemName => {
  const item = localStorage.getItem(itemName);
  return JSON.parse(item);
};

export const clearItems = () => localStorage.clear();
