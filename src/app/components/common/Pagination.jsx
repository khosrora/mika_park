export default function Pagination({ next, prev, state, setState }) {
  return (
    <div className="flex justify-end items-center w-full my-4">
      <div className="join grid grid-cols-2">
        {prev !== null && (
          <button
            disabled={!!prev ? false : true}
            onClick={() => setState(state - 1)}
            className="join-item btn-xs btn-outline"
          >
            صفحه قبلی
          </button>
        )}
        {next !== null && (
          <button
            disabled={!!next ? false : true}
            onClick={() => setState(state + 1)}
            className="join-item btn-xs btn-outline"
          >
            صفحه بعدی
          </button>
        )}
      </div>
    </div>
  );
}
