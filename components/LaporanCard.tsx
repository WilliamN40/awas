import Image from "next/image";

const LaporanCard = ({ laporan, canAccess, handleEdit, handleDelete }: any) => {

    return (
        <div className="border border-gray-300 my-3 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="flex justify-between">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{laporan.judul}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{laporan.lokasi}</p>
                </div>
                {canAccess && <div className="flex px-4 py-5 gap-5">
                    <p
                        className="cursor-pointer text-green-500"
                        onClick={() => handleEdit(laporan)}
                    >
                        Edit
                    </p>
                    <p
                        className="cursor-pointer text-orange-500"
                        onClick={() => handleDelete(laporan)}
                    >
                        Delete
                    </p>
                </div>}
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Deskripsi</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{laporan.deskripsi}</dd>
                    </div>
                </dl>
                {laporan.foto && <div className="px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-4">
                    <span className="text-sm font-medium text-gray-500">Foto</span>
                    <div className="relative h-64"><Image src={laporan.foto} className="cursor-pointer" alt="Foto" layout="fill" objectFit="contain" objectPosition="left" onClick={() => window.open(laporan.foto, "_blank")} /></div>
                </div>}

            </div>
        </div>
    )
}

export default LaporanCard;