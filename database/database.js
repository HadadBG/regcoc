import guerrasDAO from './dao/guerrasDAO'
import { MongoClient } from 'mongodb'
import ligasDAO from './dao/ligasDAO'
import juegosDAO from './dao/juegosDAO'
export default class database {
  static async configDb () {
    const client = await MongoClient.connect(
      process.env.REGCOC_DB_URI,
      { useUnifiedTopology: true }
    )

    this.client = client
    await guerrasDAO.injectDB(client)
    await ligasDAO.injectDB(client)
    await juegosDAO.injectDB(client)
    console.log('Database Connected')
  }
}
