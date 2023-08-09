/**
 *
 * @param prefixName 前缀名
 * @param blockName 代码块名
 * @param elementName 元素名
 * @param modifierName 装饰符名
 * @returns  说白了 ，就是提供一个函数，用来拼接三个字符串，并用不同的符号进行分隔开来
 */
function _bem(prefixName, blockName, elementName, modifierName) {
  if (blockName) {
    prefixName += `-${blockName}`;
  }
  if (elementName) {
    prefixName += `__${elementName}`;
  }
  if (modifierName) {
    prefixName += `--${modifierName}`;
  }
  return prefixName;
}

/**
 *
 * @param prefixName 前缀
 * @returns
 */
function createBEM(prefixName: string) {
  const b = (blockName?) => _bem(prefixName, blockName, '', '');

  const e = (elementName) =>
    elementName ? _bem(prefixName, '', elementName, '') : '';

  const m = (modifierName) =>
    modifierName ? _bem(prefixName, '', '', modifierName) : '';

  const be = (blockName, elementName) =>
    blockName && elementName
      ? _bem(prefixName, blockName, elementName, '')
      : '';
  const bm = (blockName, modifierName) =>
    blockName && modifierName
      ? _bem(prefixName, blockName, '', modifierName)
      : '';
  const em = (elementName, modifierName) =>
    elementName && modifierName
      ? _bem(prefixName, '', elementName, modifierName)
      : '';
  const bem = (blockName, elementName, modifierName) =>
    blockName && elementName && modifierName
      ? _bem(prefixName, blockName, elementName, modifierName)
      : '';
  const is = (name, state?) => (state ? `is-${name}` : '');
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}
export function createNamespace(name: string) {
  const prefixName = `elu-${name}`;
  return createBEM(prefixName);
}
