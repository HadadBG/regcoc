import guerrasDAO from 'database/dao/guerrasDAO'
import ligasDAO from 'database/dao/ligasDAO'
import juegosDAO from 'database/dao/juegosDAO'
const { GraphQLDateTime } = require('graphql-iso-date')
export const resolvers = {
  Query: {
    getMiembros: async () => {
      const result = await guerrasDAO.getMiembros({})
      if (result.error) {
        console.log('Error:' + result.error)
        return []
      }
      return result
    },
    getLigas: async () => {
      const result = await ligasDAO.getLigas()
      if (result.error) {
        console.log('Error:' + result.error)
        return []
      }
      return result
    },
    getGuerraById: async (parent, { id }) => {
      const result = await guerrasDAO.getGuerraById(id)
      if (result.error) {
        console.log('Error:' + result.error)
        return null
      }
      return result
    },
    getLigaById: async (parent, { id }) => {
      const result = await ligasDAO.getLigaWithGuerrasById(id)
      if (result.error) {
        console.log('Error:' + result.error)
        return null
      }
      return result
    },
    getGuerras: async (parent, { page, guerrasPerPage }) => {
      const result = await guerrasDAO.getGuerras({ page: page, guerrasPerPage: guerrasPerPage })
      if (result.error) {
        console.log('Error:' + result.error)
        return []
      }
      return result
    },
    getJuegos: async (parent, { page, juegosPerPage }) => {
      const result = await juegosDAO.getJuegos({ page: page, juegosPerPage: juegosPerPage })
      if (result.error) {
        console.log('Error:' + result.error)
        return []
      }
      return result
    },
    getJuegoById: async (parent, { id }) => {
      const result = await juegosDAO.getJuegoById(id)
      if (result.error) {
        console.log('Error:' + result.error)
        return null
      }
      return result
    }
  },
  Mutation: {
    insertLiga: async () => {
      const hoy = new Date()
      const ligasResponse = await ligasDAO.insertLiga(hoy)
      if (ligasResponse.error) throw new Error(ligasResponse.error)
      const guerrasResponse = await guerrasDAO.insertGuerras([
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 1) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 2) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 3) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 4) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 5) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 6) },
        { liga: ligasResponse.insertedId, fecha: new Date(hoy.getTime() + 7) }])
      if (guerrasResponse.error) throw new Error(guerrasResponse.error)
      return ligasResponse.insertedId
    },
    updateGuerra: async (parent, { guerra }) => {
      const id = guerra._id
      delete guerra._id
      const response = await guerrasDAO.updateGuerra(id, guerra)
      if (response.error) throw new Error(response.error)
      return response.modifiedCount
    },
    updateLiga: async (parent, { liga }) => {
      const id = liga._id
      delete liga._id
      const response = await ligasDAO.updateLiga(id, liga)
      if (response.error) throw new Error(response.error)
      return response.modifiedCount
    },
    insertGuerra: async () => {
      const hoy = new Date()
      const response = await guerrasDAO.insertGuerra({ fecha: hoy })
      if (response.error) throw new Error(response.error)
      return response.insertedId
    },
    updateJuego: async (parent, { juego }) => {
      const id = juego._id
      delete juego._id
      const response = await juegosDAO.updateJuego(id, juego)
      if (response.error) throw new Error(response.error)
      return response.modifiedCount
    },
    insertJuego: async () => {
      const hoy = new Date()
      const response = await juegosDAO.insertJuego({ fecha: hoy })
      if (response.error) throw new Error(response.error)
      return response.insertedId
    }
  },
  ISODate: GraphQLDateTime
}
