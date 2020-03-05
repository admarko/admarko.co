import React from 'react';
import './__styles__/Home.css';

export default function Home() {
  return (
    <article>
      <h1>I&rsquo;ll be back soon!</h1>
      <div>
        <p>
          Sorry for the inconvenience but I&rsquo;m performing some maintenance
          at the moment. If you need to you can always{' '}
          <a href="mailto:admarko@gmail.com">contact me</a>, otherwise
          i&rsquo;ll be back online shortly!
        </p>
        <p>&mdash; Alex</p>
      </div>
    </article>
  );
}
