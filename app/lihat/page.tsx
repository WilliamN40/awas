"use client"

import { useEffect, useState } from "react";
import LaporanCard from "@/components/LaporanCard";
import { getCookie } from "cookies-next";
import { set } from "mongoose";
import { setLazyProp } from "next/dist/server/api-utils";

const ListLaporan = ({ data, handleEdit, handleDelete }: any) => {

    const currentUserID = getCookie('userID');

    return (
        <div className="mt-16 flex flex-col-reverse">
            {data.map((laporan: any) => (
                <LaporanCard 
                    key={laporan._id}
                    laporan={laporan}
                    canAccess={laporan.userID === currentUserID}
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
        <ListLaporan data={listLaporan} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}