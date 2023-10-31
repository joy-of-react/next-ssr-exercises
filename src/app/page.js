import React from 'react';

function Home() {
  return (
    <div className="homepage-wrapper">
      <p>
        This repository consists of three exercises:
      </p>
      <ol>
        <li>
          <a href="/exercises/01-clock">Clock</a>
        </li>
        <li>
          <a href="/exercises/02-checkout">
            Neighborhood Shop
          </a>
        </li>
        <li>
          <a href="/exercises/03-interview">
            Artist Interview
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Home;
