/**
 * Utility generic functions
 */

function createNItems(N, classes = '', idPrefix = '', autoincrementId = false) {
  // Array items
  const arrItems = [];
  // create N number of items
  for (let i = 0; i < N; i += 1) {
    arrItems.push(document.createElement('div'));
  }
  // set attributes to items
  for (let i = 0; i < arrItems.length; i += 1) {
    arrItems[i].setAttribute('class', classes);
    const itemId = autoincrementId ? `${idPrefix}${i}` : idPrefix;
    arrItems[i].setAttribute('id', itemId);
  }
  return arrItems;
}

export { createNItems };
