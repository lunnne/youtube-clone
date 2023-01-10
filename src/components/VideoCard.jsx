import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export default function VideoCard({ item }) {
  const { id, snippet } = item;
  const dateTimeAgo = moment(new Date(snippet.publishedAt)).fromNow();
  
  return (
    <li className="list-none">
      <Link to={`/videos/watch/${id.videoId ? id.videoId : id}/${snippet.channelId}`}>
        <img className='w-full' src={snippet.thumbnails.default.url} alt="thumnail" />
      </Link>
        <p className="text-lg">{snippet.title}</p>
        <p className="text-sm font-light">{snippet.channelTitle}</p>
        <p className="text-sm">{dateTimeAgo}</p>
    </li>
  );
}
