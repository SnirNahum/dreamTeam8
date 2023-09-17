const PlayerListFilter = ({ column }: any) => (
  <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
    {column.render("Header")}
    <span>{column.isSorted ? (column.isSortedDesc ? " ↑" : " ↓") : ""}</span>
  </th>
);

export default PlayerListFilter;
