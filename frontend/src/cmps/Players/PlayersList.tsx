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
import "../../assets/scss/mq/mobile.scss";
import { useState } from "react";
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
function PlayersList({ getPlayer, currPlayer, teamPlayers }) {

  let players = useSelector((state: any) => state.fplModule.players);
  const [emptyFilter, setEmtpyFilter] = useState("");

  if (teamPlayers) {
    players = teamPlayers
  }

  function handleChange(ev: any) {
    setGlobalFilter(ev.target.value);
    const filteredPlayers = players.filter((player) =>
      player.web_name.toLowerCase().includes(ev.target.value.toLowerCase())
    );
    setEmtpyFilter(filteredPlayers);
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
        <div className="skeleton-player-list">
          <Skeleton count={11} />
        </div>
      ) : (
        <>
          {emptyFilter.length === 0 && emptyFilter ? (
            <div className="empty-player-filter">No players found</div>
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
                    return (
                      <TableRow
                        key={row.id}
                        row={row}
                        players={players}
                        getPlayer={getPlayer}
                        currPlayer={currPlayer}
                      />
                    );
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
        </>
      )}
    </div>
  );
}

export default PlayersList;
