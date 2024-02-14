import Laporan from "@/models/laporan";
import { connectToDB } from "@/utils/database";

export const DELETE = async (req: Request, { params } : { params: {id: string} } ) => {
    try {
        await connectToDB();

        const laporan = await Laporan.findByIdAndDelete(params.id);

        return new Response(JSON.stringify(laporan), { status: 200 });
    } catch (error) {
        return new Response("Error deleting laporan", { status: 500 });
    }
}