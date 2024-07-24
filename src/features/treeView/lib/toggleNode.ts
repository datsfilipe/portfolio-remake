export const toggleNode = (
  previousOpenNodes: Set<string>,
  key: string
): Set<string> => {
  const newOpenNodes = new Set(previousOpenNodes)
  newOpenNodes.has(key) ? newOpenNodes.delete(key) : newOpenNodes.add(key)
  return newOpenNodes
}