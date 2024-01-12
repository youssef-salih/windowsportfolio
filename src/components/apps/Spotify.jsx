import React from "react";

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/embed/playlist/4l1CEhc7ZPbaEtiPdCSGbl"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey "
    ></iframe>
  );
}

export const displaySpotify = () => {
  return <Spotify> </Spotify>;
};
