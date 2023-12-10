// components/category/CategoryCreate
"use client";
import { useSessionYear } from "@/context/session";
export default function AdminCreateSession() {
  // context
  const {
    name,
    setName,
    updatingSessionYear,
    setUpdatingSessionYear,
    createSessionYear,
    updateSession,
    deleteSession,
  } = useSessionYear();
  return (
    <>
      <input
        type="text"
        value={updatingSessionYear ? updatingSessionYear.name : name}
        onChange={(e) =>
          updatingSessionYear
            ? setUpdatingSessionYear({
                ...updatingSessionYear,
                name: e.target.value,
              })
            : setName(e.target.value)
        }
        className="form-control p-2 my-2"
      />
      {/* <pre>{JSON.stringify(categoryUpdate, null, 4)}</pre> */}
      <div className="d-flex justify-content-between">
        <button
          className={`btn bg-${
            updatingSessionYear ? "info" : "primary"
          } text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingSessionYear ? updateSession() : createSessionYear();
          }}
        >
          {updatingSessionYear ? "Update" : "Create2"}
        </button>
        {updatingSessionYear && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();

                deleteSession();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => setUpdatingSessionYear(null)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </>
  );
}
// see created categories list
// http://localhost:3000/api/category
