export function SongCard({ track }) {
  return (
    <li
      key={track.id}
      className='m-5 p-2.5 bg-[rgba(203,245,92,0.3)] text-white border-2 border-[rgb(203,245,92)] rounded-[7px]'
    >
      <p>
        Artist: {track.name} - {track.artist}
      </p>
      <p>Album: {track.album}</p>
      <p>Duration: {track.duration}</p>
    </li>
  );
}
