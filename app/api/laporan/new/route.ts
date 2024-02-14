import Laporan from "@/models/laporan";
import cloudinary from "@/utils/cloudinary";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

export const POST = async (req: NextRequest) => {
    const { judul, lokasi, deskripsi, fotoSrc } = await req.json();
    let userID = req.cookies.get('userID')?.value;
    if (userID === undefined) {
        const newUserID = v4();
        userID = newUserID;
    }
    
    console.log(fotoSrc);
    let fotoUrl = "";
    if (fotoSrc) {
        try {
            const uploadedImageResponse = await cloudinary.v2.uploader.upload(fotoSrc);
            fotoUrl = uploadedImageResponse.secure_url;
        } catch (error) {
            return new Response("Error uploading image", { status: 500 });
        }
    }

    try {
        await connectToDB();
        const laporan = new Laporan({
            userID,
            judul,
            lokasi,
            deskripsi,
            foto: fotoUrl,
        });

        await laporan.save();

        const response = new NextResponse(JSON.stringify(laporan), { status: 201 });
        response.cookies.set('userID', userID);

        return response;
    } catch (error) {
        return new Response("Error creating laporan", { status: 500 });
    }
}