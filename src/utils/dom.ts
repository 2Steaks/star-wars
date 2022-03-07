/** @format */

export const ownerDocument = (node: Node | undefined): Document => {
  return (node && node.ownerDocument) || document;
};
