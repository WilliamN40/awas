export const dynamic = 'force-dynamic'
import Laporan from "@/models/laporan";
import { connectToDB } from "@/utils/database";

export const GET = async (req: Request) => {
    try {
        await connectToDB();

        const laporan = await Laporan.find({});

        return new Response(JSON.stringify(laporan), { status: 200 });
    } catch (error) {
        return new Response("Error fetching laporan", { status: 500 });
    }
}
