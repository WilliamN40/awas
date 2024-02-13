import Laporan from "@/models/laporan";
import cloudinary from "@/utils/cloudinary";
import { connectToDB } from "@/utils/database";

export const POST = async (req: Request) => {
    const { judul, lokasi, deskripsi, fotoSrc } = await req.json();

    
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
            judul,
            lokasi,
            deskripsi,
            foto: fotoUrl,
        });

        await laporan.save();

        return new Response(JSON.stringify(laporan), { status: 201 });
    } catch (error) {
        return new Response("Error creating laporan", { status: 500 });
    }
}