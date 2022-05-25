import React from 'react';

export default function BusinessList({ yelpData }) {
  return (
    <div className="business">
      {yelpData.map((yelps, i) => (
        <>
          <div key={yelps + i} yelps={yelps} />
          <h2>{yelps.name}</h2>
        </>
      ))}
    </div>
  );
}
