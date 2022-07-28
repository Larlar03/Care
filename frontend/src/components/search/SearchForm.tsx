import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchOptions from "./SearchOptions";
import SearchPriceRange from "./SearchPriceRange";
import "./SearchForm.css";

// interface SearchFormProps {
//   storeOptions: (arr: string[]) => void;
// }

export default function SearchForm() {
  const [options, setOptions] = useState<Array<string>>([]);

  const storeOptions = (arr: string[]) => {
    setOptions(arr);
    console.log("arra stored");
  };

  return (
    <div className="search-form-container">
      <form action="submit">
        <div className="mb-3">
          <SearchInput />
        </div>
        <div className="mb-3">
          <SearchOptions {...storeOptions} />
        </div>
        <div className="mb-3">
          <SearchPriceRange />
        </div>
        <button id="submit-button" type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
