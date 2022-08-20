import { useRef, useEffect } from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchRef}
          />
        </div>
      </form>
    </section>
  );
}
