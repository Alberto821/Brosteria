import { pool } from "../db.js";

export const pollitos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM pollos",
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "receta no encontrada" });
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};