const { sql } = require('@vercel/postgres');

module.exports = async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
};
