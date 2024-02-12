const Node = ({ data, onToggle, expandedIds }) => {
    console.log(data);
  const icon = (item) => {
    if (item.node)
      return expandedIds.includes(item.id) && item.children ? "📂" : "📁";
    return "📑";
  };

  const handleClick = (e, id) => {
    e.stopPropagation();
    onToggle(id);
  };

   return (
    <ul>
      {data.map((item) => (
        <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
          {icon(item)} {item.name} {item.price ? `${item.price} руб.` : ""}
          {expandedIds.includes(item.id) && item.children && (
            <Node data={item.children}  onToggle={onToggle} expandedIds={expandedIds}/>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Node;
