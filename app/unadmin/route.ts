import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const GET = async (request: NextRequest, response: NextResponse) => {
    const res = new NextResponse('OK', { status: 200 });
    res.cookies.delete('userID')

    return res;
}