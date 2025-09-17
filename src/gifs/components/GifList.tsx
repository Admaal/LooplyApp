import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
  gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <a href={gif.url} target="_blank" rel="noopener noreferrer">
            <img src={gif.url} alt={gif.title} style={{ cursor: "pointer" }} />
          </a>
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height}
          </p>
        </div>
      ))}
    </div>
  );
};
