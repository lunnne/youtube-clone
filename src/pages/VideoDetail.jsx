import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoList from '../components/VideoList';
import YouTube from 'react-youtube-embed';

export default function VideoDetail() {
  const { videoId, channelId } = useParams();

  const {
    isLoading,
    error,
    data: video,
  } = useQuery(['video'], async () => {
    console.log('...fetching..');
    // return fetch('/data/detail.json').then((res) => res.json());
    return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then((res) => res.json());
  });

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  console.log(video);

  return (
    <main className="grid grid-cols-5 gap-5">
      <article className="col-span-4 my-5">
        <YouTube id={videoId} />
        <div className='flex items-center justify-start mt-10 mb-5'>
          <img className='w-8 rounded-full overflow-hidden mr-3' src={video.items[0].snippet.thumbnails.default.url} alt="" />
          <p className='text-xl' >{video.items[0].snippet.title}</p>
        </div>
        <p>{video.items[0].snippet.description}</p>
      </article>
      <aside className="col-span-1">
        <VideoList videoId={videoId}  />
      </aside>
    </main>
  );
}
