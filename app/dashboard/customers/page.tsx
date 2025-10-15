export default function Page() {
  return (
    <main>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="columns-2 mt-4">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="columns-2 mt-4">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="columns-2 mt-4">
        <p>Well, let me tell you something, ...</p>
        <p>Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
        <p>Look. If you think this is...</p>
      </div>
      <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
        Hello
        <br />
        World
      </span>
      <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
        Hello
        <br />
        World
      </span>
    </main>
  );
}
