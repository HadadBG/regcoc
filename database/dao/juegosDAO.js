
import { ObjectId } from 'bson'

let juegos
let regcoc

export default class guerrasDAO {
  static async injectDB (conn) {
    if (juegos) {
      return
    }
    try {
      regcoc = await conn.db(process.env.REGCOC_NS)
      juegos = await conn.db(process.env.REGCOC_NS).collection('juegos')
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in juegosDAO: ${e}`
      )
    }
  }

  static async getJuegos ({
    page = 0,
    guerrasPerPage = 7
  }) {
    let response
    try {
      const cursor = await juegos.find({})
        .sort({ fecha: -1 })
        .skip(page * guerrasPerPage)
        .limit(guerrasPerPage)

      response = await cursor.toArray()
      cursor.close()
    } catch (error) {
      response = { error: error }
    }
    return response
  }

  static async updateJuego (id, juego) {
    let response
    try {
      response = await juegos.updateOne({ _id: ObjectId(id) },
        { $set: juego })
    } catch (e) {
      response = { error: e }
    }
    return response
  }

  static async getJuegoById (id) {
    let response
    try {
      response = await juegos.findOne({ _id: ObjectId(id) })
    } catch (e) {
      response = { error: e }
    }
    return response
  }

  static async insertJuego ({ fecha }) {
    let response
    try {
      response = await juegos.insertOne({
        mes: 'Diciembre',
        anio: '2021',
        max_puntos: 75000,
        puntos_conseguidos: 0,
        no_miembros_clan: 50,
        fecha: fecha
      })
    } catch (error) {
      response = { error: error }
    }
    return response
  }
}
