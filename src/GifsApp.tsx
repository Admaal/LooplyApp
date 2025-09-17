import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Gifs App" description="Encuentra los mejores gifs" />

      {/* <SearchBar /> */}
      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      {/* Búsquedas Previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* <GifsList />  */}
      <GifList gifs={gifs} />
    </>
  );
};
