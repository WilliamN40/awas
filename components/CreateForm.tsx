"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateForm = () => {

    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [laporan, setLaporan] = useState({
        judul: "",
        lokasi: "",
        waktu: "",
        deskripsi: "",
    });
    const [foto, setFoto] = useState(''); 
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        setLaporan({...laporan, waktu: new Date().toLocaleString('sv')});
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFile = e.target.files && e.target.files[0];
        if (!selectedFile?.type.includes('image')) {
            alert('File harus berupa gambar');
            return;
        }
        setFoto(e.target.value);

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile as Blob);
        reader.onload = () => {
            setFotoSrc(reader.result as string);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("api/laporan/new", {
                method: "POST",
                body: JSON.stringify({
                    judul: laporan.judul,
                    lokasi: laporan.lokasi,
                    deskripsi: laporan.deskripsi,
                    waktu: laporan.waktu,
                    fotoSrc: fotoSrc
                }),
            })

            if (response.ok) {
                router.push('/lihat')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
    
    return (
        <div className="mx-auto max-w-7xl px-10">
          <form onSubmit={handleSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-y-4">
                <p>Judul: </p>
                <input 
                    value={laporan.judul}
                    onChange={(e) => setLaporan({...laporan, judul: e.target.value})}
                    type="text"
                    placeholder="Berikan judul singkat"
                    className='block rounded-md'
                />
                <p>Lokasi: </p>
                <div className="flex space-x-5">
                    <input 
                        value={laporan.lokasi}
                        onChange={(e) => setLaporan({...laporan, lokasi: e.target.value})}
                        type="text" 
                        className="block rounded-md w-1/2"
                    />
                  {/* <button
                    type="button"
                    onClick={() => {}}
                  >
                    Deteksi Lokasi
                    </button> */}
                </div>
                <p>Deskripsi:</p>
                <textarea 
                    value={laporan.deskripsi}
                    onChange={(e) => setLaporan({...laporan, deskripsi: e.target.value})}
                    rows={3}
                    className='block rounded-md'
                    placeholder='Berikan deskripsi singkat kejadian'
                />
                
                <p>Waktu:</p>
                <input 
                    type="datetime-local"
                    value={laporan.waktu}
                    onChange={(e) => setLaporan({...laporan, waktu: e.target.valueAsDate?.toLocaleString('sv') || new Date().toLocaleString('sv')})}
                />
                
                <p>Foto:</p>
                
                <div className='flex'>
                <input 
                    type="file" 
                    onChange={handleImageChange}
                    value={foto}
                    //accept="image/*"
                />

                <button
                    type="button"
                    onClick={() => {
                        setFotoSrc('');
                        setFoto('');
                    }}
                    className='bg-gray-200 text-gray-700 rounded-md p-2 hover:enabled:bg-gray-300 disabled:opacity-50'
                    disabled={!fotoSrc}
                >
                    Hapus Foto
                </button>

                </div>
                
                {fotoSrc &&  
                    <Image src={fotoSrc} alt="uploadedfoto" width={300} height={300}/>
                }


                <button 
                    type="submit"
                    disabled={submitting}
                    className='mb-10 btn-primary w-full rounded-md py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200'
                >
                    {submitting ? "Mengirim..." : "Kirim"}
                </button>
            </div>
          </form>
        </div>
    )
}

export default CreateForm;