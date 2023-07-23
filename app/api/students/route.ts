import { NextResponse } from 'next/server'

import axios from 'axios'

export async function GET() {
  try {
    const result = await axios.get(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/JobPlacements`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    )

    console.log(result.data.records, '🔥⚽')

    return NextResponse.json({ students: result.data.records })
  } catch (error) {
    console.error(error)
  }
}
