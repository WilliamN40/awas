export default function Home() {
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="AWAS"/> */}
              <h1 className='text-white'><b>AWAS</b>: Anti-Bullying dan Waspada </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Laporkan</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Laporkan</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
        </div>
      </div>
      </nav>

      <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Laporkan</h1>
      </div>
    </header>
      <main>
        <div className="mx-auto max-w-7xl">
          <form>
            <div className="mt-10 grid grid-cols-1 gap-y-4">
                <p>Judul: </p>
                <input type="text" name="judul" className='block rounded-md' placeholder="Berikan judul singkat seperti 'Tabrak lari' atau 'Tawuran'"/>
                <p>Lokasi: </p>
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="lokasi" id="online"/>
                  <label htmlFor="online">Online</label><br/>
                </div>
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="lokasi" id="offline"/>
                  <label htmlFor="offline">Offline</label>
                </div>
                <p>Deskripsi:</p>
                <textarea rows={3} className='block rounded-md' placeholder='Berikan deskripsi singkat kejadian'/>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
