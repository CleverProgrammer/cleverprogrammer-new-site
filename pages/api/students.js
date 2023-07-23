import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await axios.get(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/JobPlacements`,
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          },
        }
      )

      console.log(result.data.records, '🔥')

      return res.status(200).json(result.data.records)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}
