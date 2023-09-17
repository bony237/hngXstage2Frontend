import { NextResponse } from "next/server";

export async function GET(id: string) {
  const TMDBTOKEN = process.env.TMDBTOKEN;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, { headers: { Authorization: `Bearer ${TMDBTOKEN}` } });

  return await res.json();

  //   return NextResponse.json({ movie });
}
