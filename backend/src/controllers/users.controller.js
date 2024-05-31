import { pool } from "../database/conexion.js"

export const createUser = async (req, res) => {
    try {
        const { nombre, telefono, email, cedula } = req.body
        const [ result ] = await pool.query("insert into usuarios(nombre, telefono, email, cedula) VALUE (?, ?, ?, ?)", [ nombre, telefono, email, cedula ])

        if (result.affectedRows > 0) {
            return res.status(200).json({
                "mensaje": "Usuario creado Con Exito"
            })
        } else {
            return res.status(404).json({
                "mensaje": "No se pudo crear el usuario"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}