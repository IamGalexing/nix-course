import { NextRequest, NextResponse } from 'next/server';
import { POLYGON_API } from '@/constants/apiConstants';

interface Params {
  ticker: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const apiKey = process.env.POLYGON_API_KEY;
    const ticker = params.ticker;
    const response = await fetch(
      `${POLYGON_API}/v3/reference/tickers?ticker=${ticker}&active=true&apiKey=${apiKey}`
    );
    const responseJson = await response.json();
    return NextResponse.json(responseJson, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Error happened when fetching for ticker!' },
      { status: 400 }
    );
  }
}
