import { SongCard } from "./components/SongCard";
import { dummyPlaylistData } from "../data";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ul className='flex'>
        {dummyPlaylistData.tracks.map((track) => (
          <SongCard key={track.id} track={track} />
        ))}
      </ul>
    </main>
  );
}
