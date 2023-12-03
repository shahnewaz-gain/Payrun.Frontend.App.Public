'use client';

function Error({ error }) {
  return (
    <div>
      <h2>An error occurred: {error?.message}</h2>

      <button type="button" onClick={() => window.location.reload(false)}>
        Try again
      </button>
    </div>
  );
}

export default Error;
