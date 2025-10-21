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
      <div>
        <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
          Hello
          <br />
          World
        </span>
      </div>
      <div>
        <span className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
        <span className="inline-grid grid-cols-3 gap-4 text-red-500">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
      </div>
      <div>
        <div className="flex ...">
          <div className="flex-1 ...">01</div>
          <div className="contents">
            <div className="flex-1 ...">02</div>
            <div className="flex-1 ...">03</div>0
          </div>
          <div className="flex-1">04</div>
        </div>
      </div>

      <div className="relative w-64 h-64 bg-gray-200">
        <div className="absolute w-32  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-500">33</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-300 visible">01</div>
        <div className="bg-red-300 collapse">02</div>
        <div className="bg-red-300">03</div>
      </div>
      <div>
        <textarea className="caret-red-500"></textarea>
      </div>
      <div className="flex w-64 gap-2">
        <div className="bg-blue-400 flex-none w-10">A</div>
        <div className="bg-green-400 flex-1">B</div>
        <div className="bg-pink-400 grow">C</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-400">01</div>
        <div className="bg-blue-400">02</div>
        <div className="bg-blue-400">03</div>
        <div className="bg-blue-400">04</div>
        <div className="bg-blue-400">05</div>
        <div className="col-span-3 grid grid-cols-subgrid gap-4">
          <div className="col-start-2 bg-red-500">06</div>
          <div className="bg-red-500">06</div>
          <div className="bg-red-500">06</div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 col-start-2 bg-blue-400">01</div>
          <div className="col-start-1 col-end-3 bg-blue-400">02</div>
          <div className="col-span-2 col-end-7 bg-blue-400">03</div>
          <div className="col-start-1 col-end-7 bg-blue-400">04</div>
        </div>
      </div>
    </main>
  );
}
