import { ObjectId } from 'bson'

let ligas
let regcoc
/*
import { Date } from "bson";
*/

export default class ligasDAO {
  static async injectDB (conn) {
    if (ligas) {
      return
    }
    try {
      regcoc = await conn.db(process.env.REGCOC_NS)
      ligas = await conn.db(process.env.REGCOC_NS).collection('ligas')
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in ligasDAO: ${e}`
      )
    }
  }

  /*
  static async insertPostales(toInsertPostales = [{}]) {
    let response = { insertedIds: undefined, errors: undefined };
    try {
      let insertResult = await postales.insertMany(toInsertPostales, {
        ordered: false
      });

      response.insertedIds = Object.values(insertResult.insertedIds);
    } catch (e) {
      response.errors = e;
    }
    return response;
  }

  static async deletePostales(toDeletePostalesIds = []) {
    let deleteOperations = toDeletePostalesIds.map(function(id) {
      let operation = {};
      operation["deleteOne"] = { filter: { _id: ObjectId(id) } };
      return operation;
    });
    let response = { nDeleted: undefined, errors: undefined };
    try {
      let resultBulkWrite = await postales.bulkWrite(deleteOperations);
      response.nDeleted = resultBulkWrite.deletedCount;
    } catch (e) {
      response.errors = e;
    }
    return response;
  }
*/
  static async insertLiga (fecha) {
    let response
    try {
      response = await ligas.insertOne({
        mes: 'Diciembre',
        anio: '2021',
        total_estrellas: 1000,
        estrellas_ganadas: 100,
        total_destruccion: 1000,
        destruccion_realizada: 100,
        liga: 'Oro II',
        tamano: 15,
        terminada: false,
        puesto: 5,
        fecha: fecha
      })
    } catch (error) {
      response = { error: error }
    }
    return response
  }

  static async getLigas () {
    let response
    try {
      const cursor = ligas.find({})
      response = await cursor.toArray()
      cursor.close()
    } catch (error) {
      response = { error: error }
    }

    return response
  }

  static async getLigaWithGuerrasById (id) {
    let response
    try {
      const cursor = ligas.aggregate([
        {
          $match: {
            _id: new ObjectId(id)
          }
        }, {
          $lookup: {
            from: 'guerras',
            localField: '_id',
            foreignField: 'liga',
            as: 'guerras'
          }
        }
      ])
      response = await cursor.toArray()
      cursor.close()
    } catch (error) {
      response = { error: error }
    }
    return response[0]
  }

  static async updateLiga (id, liga) {
    let response
    try {
      response = await ligas.updateOne({ _id: ObjectId(id) },
        { $set: liga })
    } catch (e) {
      response = { error: e }
    }
    return response
  }
}
