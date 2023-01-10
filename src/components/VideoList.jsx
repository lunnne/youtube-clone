import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid'

export default function VideoList({ videoId}) {
  const { searchText } = useParams();
  const {
    isLoading,
    error,
    data: videoList,
  } = useQuery(
    ['videoList', searchText, videoId],
    async () => {
      if (searchText) {
        // return fetch('/data/search.json').then((res) => res.json())
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then((res) => res.json());
      } else if (videoId) {
        // return fetch('/data/related.json').then((res) => res.json())
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then((res) => res.json());
      } else {
        // return fetch('/data/most-popular.json').then((res) => res.json())        
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then((res) => res.json());
      }
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <p>'Loading..</p>;
  if (error) return <p>'error occured'</p>;

  return (
    <div className={videoId? 'grid grid-cols-1' : `grid grid-cols-5  auto-rows-auto gap-5`}>
      { videoList && videoList.items.map((item) => (
        <VideoCard key={uuidv4()} item={item} videoId={videoId}/>
      ))}
    </div>
  );
}
