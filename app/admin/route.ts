import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const GET = async (request: NextRequest, response: NextResponse) => {
    const res = NextResponse.redirect(new URL("/lihat", request.url));
    res.cookies.set('userID', 'admin');

    return res;
}