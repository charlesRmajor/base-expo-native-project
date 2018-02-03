/*
based on code
from: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
*/

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
  
  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
export default objectMerge = (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          objectMerge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return objectMerge(target, ...sources);
  }
  
export const mergeStyles = (defaultStyles, props) => {
  const newStyles = objectMerge(defaultStyles, props.styles || null);

  const newProps = {};

  for (const key in props) {
    if (key=='styles') {
      newProps[key] = newStyles;
    } else {
      newProps[key] = props[key];
    }
  }
  return(newProps)
}