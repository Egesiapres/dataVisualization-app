export const setItem = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};

export const getItem = itemName => {
  const item = localStorage.getItem(itemName);
  return JSON.parse(item);
};

export const clearItem = itemName => localStorage.clear(itemName);

export const clearItems = () => localStorage.clear();
