import React from "react";

export const Seacrch = ({inputSearch, setInputSearch,onClickSearch}) => {
  return (
    <form className="d-flex" onSubmit={onClickSearch}>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar producto"
        value={inputSearch}
        onChange={(e)=>setInputSearch(e.target.value)}
      />
      <button className="btn btn-primary" onClick={onClickSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
};
