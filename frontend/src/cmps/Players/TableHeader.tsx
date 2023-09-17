import PlayerListFilter from "./PlayerListFilter";

const TableHeader = ({ headerGroup }: any) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((column: any) => (
      <PlayerListFilter key={column.id} column={column} />
    ))}
  </tr>
);

export default TableHeader;
