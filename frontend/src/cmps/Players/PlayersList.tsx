import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";
import TableRow from "./TableRow";
import PlayerCell from "./PlayerCell";
import PlayersTableFilter from "./PlayersTableFilter";
import PtsFilter from "./PtsFilter";

const columns = [
  {
    Header: "Name",
    accessor: "web_name",
    Cell: ({ cell }: any) => (
      <PlayerCell value={cell.value} player={cell.row.original} />
    ),
  },
  {
    Header: "Owned",
    accessor: "selected_by_percent",
  },
  {
    Header: "24h +/-",
    accessor: "transfers_in_event",
  },
  {
    Header: "Pts",
    accessor: "total_points",
    Filter: PtsFilter,
  },
  {
    Header: "£",
    accessor: "now_cost",
  },
];

function PlayersList() {
  const players = useSelector((state: any) => state.fplModule.players);

  function handleChange(ev: any) {
    setGlobalFilter(ev.target.value);
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    setGlobalFilter,

    state: { pageIndex, globalFilter = "" },
  } = useTable(
    { columns, data: players },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const isPlayerListEmpty = players?.length === 0;

  return (
    <div className="player-list">
      <PlayersTableFilter value={globalFilter} onChange={handleChange} />
      {isPlayerListEmpty ? (
        <div>
          <Skeleton count={10} height={40} width={900} />
        </div>
      ) : (
        <div className="players-table">
          <table className="player-table-container" {...getTableProps()}>
            <thead className="table-header">
              {headerGroups.map((headerGroup: any, index: any) => (
                <TableHeader
                  key={headerGroup.headers[index]}
                  headerGroup={headerGroup}
                />
              ))}
            </thead>
            <tbody className="table-body" {...getTableBodyProps()}>
              {page.map((row: any) => {
                prepareRow(row);
                return <TableRow key={row.id} row={row} players={players} />;
              })}
            </tbody>
          </table>
          <div className="pagination">
            <Pagination
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              previousPage={previousPage}
              nextPage={nextPage}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayersList;
