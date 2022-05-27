import { ObjectId } from 'bson'

let guerras
let regcoc

export default class guerrasDAO {
  static async injectDB (conn) {
    if (guerras) {
      return
    }
    try {
      regcoc = await conn.db(process.env.REGCOC_NS)
      guerras = await conn.db(process.env.REGCOC_NS).collection('guerras')
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in guerrasDAO: ${e}`
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
  static async insertGuerra (guerra) {
    let response
    try {
      response = await guerras.insertOne(guerra)
    } catch (error) {
      response = { error: error }
    }
    return response
  }

  static async insertGuerras (toInsertGuerras) {
    let response
    try {
      response = await guerras.insertMany(toInsertGuerras)
    } catch (error) {
      response = { error: error }
    }
    return response
  }

  static async getGuerraById (id) {
    let response
    try {
      response = await guerras.findOne({ _id: ObjectId(id) })
    } catch (e) {
      response = { error: e }
    }
    return response
  }

  static async getMiembros ({
    page = 0,
    postalesPerPage = 9,
    filter = {},
    textToSearch = '',
    sort = {}
  }) {
    let response
    try {
      const cursor = guerras.aggregate([
        {
          $project: {
            _id: 0,
            nombre_estrella: {
              $zip: {
                inputs: [
                  '$jugadores.nombre', '$jugadores.ataques'
                ]
              }
            }
          }
        }, {
          $unwind: {
            path: '$nombre_estrella'
          }
        }, {
          $project: {
            nombre: {
              $arrayElemAt: [
                '$nombre_estrella', 0
              ]
            },
            ataques: {
              $arrayElemAt: [
                '$nombre_estrella', 1
              ]
            }
          }
        }, {
          $project: {
            nombre: 1,
            ataque1: {
              $arrayElemAt: [
                '$ataques', 0
              ]
            },
            ataque2: {
              $arrayElemAt: [
                '$ataques', 1
              ]
            }
          }
        }, {
          $group: {
            _id: '$nombre',
            ataques_total: {
              $sum: {
                $cond: {
                  if: '$ataque2',
                  then: 2,
                  else: 1
                }
              }
            },
            ataques_realizados: {
              $sum: {
                $cond: {
                  if: {
                    $gt: [
                      '$ataque1.porcentaje', 0
                    ]
                  },
                  then: {
                    $cond: {
                      if: {
                        $gt: [
                          '$ataque2.porcentaje', 0
                        ]
                      },
                      then: 2,
                      else: 1
                    }
                  },
                  else: {
                    $cond: {
                      if: {
                        $gt: [
                          '$ataque2.porcentaje', 0
                        ]
                      },
                      then: 1,
                      else: 0
                    }
                  }
                }
              }
            },
            porcentaje_total1: {
              $sum: '$ataque1.porcentaje'
            },
            total_estrellas1: {
              $sum: '$ataque1.estrellas'
            },
            porcentaje_total2: {
              $sum: '$ataque2.porcentaje'
            },
            total_estrellas2: {
              $sum: '$ataque2.estrellas'
            }
          }
        }, {
          $addFields: {
            porcentaje_ataques: {
              $multiply: [
                {
                  $divide: [
                    '$ataques_realizados', '$ataques_total'
                  ]
                }, 100
              ]
            },
            media_estrellas: {
              $divide: [
                {
                  $sum: [
                    '$total_estrellas1', '$total_estrellas2'
                  ]
                }, {
                  $cond: {
                    if: '$ataques_realizados',
                    then: '$ataques_realizados',
                    else: 1
                  }
                }
              ]
            },
            media_porcentaje: {
              $divide: [
                {
                  $sum: [
                    '$porcentaje_total1', '$porcentaje_total2'
                  ]
                }, {
                  $cond: {
                    if: '$ataques_realizados',
                    then: '$ataques_realizados',
                    else: 1
                  }
                }
              ]
            }
          }
        }, {
          $unset: [
            'total_estrellas1', 'total_estrellas2', 'porcentaje_total1', 'porcentaje_total2'
          ]
        }, {
          $sort: {
            porcentaje_ataques: -1,
            ataques_total: -1,
            _id: 1
          }
        }
      ])
      response = await cursor.toArray()
      cursor.close()
    } catch (e) {
      response = { error: e }
    }
    return response
  }

  static async updateGuerra (id, guerra) {
    let response
    try {
      response = await guerras.updateOne({ _id: ObjectId(id) },
        { $set: guerra })
    } catch (e) {
      response = { error: e }
    }
    return response
  }

  static async getGuerras ({
    page = 0,
    guerrasPerPage = 7
  }) {
    let response
    try {
      const cursor = await guerras.find({})
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
}
