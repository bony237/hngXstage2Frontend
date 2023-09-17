export async function GET(request:Request){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const TMDBTOKEN = process.env.TMDBTOKEN;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, { headers: { Authorization: `Bearer ${TMDBTOKEN}` } })

    const movie = await res.json();

    return movie;
}