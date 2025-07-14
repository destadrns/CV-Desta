// backend/index.js
const { sql } = require('@vercel/postgres')

module.exports = async (req, res) => {
  const url = req.url
  try {
    if (url.includes('/api/education')) {
      const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`
      return res.status(200).json(rows)
    }

    if (url.includes('/api/skills')) {
      const { rows } = await sql`SELECT * FROM skills;`
      return res.status(200).json(rows)
    }

    if (url.includes('/api/projects')) {
      const { rows } = await sql`SELECT * FROM projects;`
      return res.status(200).json(rows)
    }

    return res.status(404).json({ error: 'Not found' })
  } catch (error) {
    return res.status(500).json({ error: 'Gagal mengambil data' })
  }
}
