import { useState } from "react";
import Node from "./Node";
const Tree = ({ data }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const expand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
    );
  };

  const makeTree = (items, head = null) => {
    return items
      .filter((item) => item.head === head)
      .sort((a, b) => a.sorthead - b.sorthead)
      .map((item) => ({
        ...item,
        children: makeTree(items, item.id),
      }));
  };

  const treeArray = makeTree(data);

  return (
    <Node data={treeArray} onToggle={expand} expandedIds={expandedIds} />
  );
};

export default Tree;
