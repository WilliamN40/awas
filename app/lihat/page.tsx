"use client"

import { useEffect, useState } from "react";
import LaporanCard from "@/components/LaporanCard";
import { getCookie } from "cookies-next";

const ListLaporan = ({ data, handleEdit, handleDelete }: any) => {

    const currentUserID = getCookie('userID');

    return (
        <div className="flex flex-col-reverse">
            {data.map((laporan: any) => (
                <LaporanCard 
                    key={laporan._id}
                    laporan={laporan}
                    canAccess={laporan.userID === currentUserID || currentUserID === "admin"}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
};

export default function Lihat() {

    const [listLaporan, setlistLaporan] = useState([]);

    const fetchlistLaporan = async () => {
        try {
            const response = await fetch("/api/laporan");
            const data = await response.json();
            setlistLaporan(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchlistLaporan();
    }, []);


    const handleEdit = (laporan: any) => {
        console.log(laporan)
    }
    
    const handleDelete = async (laporan: any) => {
        const hasConfirmed = confirm("Apakah anda yakin ingin menghapus laporan ini?");
    
        if (hasConfirmed) {
            try {
                const response = await fetch(`/api/laporan/${laporan._id}`, {
                    method: "DELETE",
                });
    
                const filteredLaporan = listLaporan.filter((item: any) => item._id !== laporan._id);
    
                setlistLaporan(filteredLaporan);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Lihat Laporan</h1>
                </div>
            </header>
            <ListLaporan data={listLaporan} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    )
}