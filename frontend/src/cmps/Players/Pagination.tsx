export default function Pagination({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageIndex,
}) {
  return (
    <div className="pagination">
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        ←
      </button>
      <span>
        {pageIndex + 1} of {pageOptions.length}
      </span>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        →
      </button>
    </div>
  );
}
