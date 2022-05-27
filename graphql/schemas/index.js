import { gql } from 'apollo-server-micro'
export const typeDefs = gql`
    scalar ISODate
    type Miembro{
        _id:String
        ataques_total:Int
        ataques_realizados:Int
        porcentaje_ataques:Float
        media_estrellas:Float
        media_porcentaje:Float
    }
    type Ataque {
        estrellas:Int
        porcentaje:Int
    }
    type JugadorGuerra {
        nombre:String
        ataques:[Ataque]
    }
    type Guerra {
        _id:String
        total_estrellas:Int
        estrellas_ganadas:Int
        total_destruccion_porcentaje:Float
        jugadores:[JugadorGuerra]
        ganada:Boolean
        liga:String
        fecha:ISODate
    }
    type JugadorJuego {
        nombre:String
        puntos:Int
        posicion:Int
    }
    type Liga{
        _id:String
        mes:String
        anio:Int
        total_estrellas:Int
        estrellas_ganadas:Int
        total_destruccion:Int
        destruccion_realizada:Int
        liga:String
        tamano:Int
        terminada:Boolean
        puesto:Int
        guerras:[Guerra]
    }
    type Juego{
        _id:String
        mes:String
        max_puntos:Int
        puntos_conseguidos:Int
        anio:Int
        no_participantes:Int
        jugadores:[JugadorJuego]
        no_miembros_clan:Int
    }
    input JuegoInput{
        _id:String
        mes:String
        max_puntos:Int
        puntos_conseguidos:Int
        anio:Int
        jugadores:[JugadorJuegoInput]
        no_participantes:Int
        no_miembros_clan:Int
    }
    input JugadorJuegoInput{
        nombre:String
        posicion:Int
        puntos:Int
    }
    input LigaInput{
        _id:String
        mes:String
        anio:Int
        total_estrellas:Int
        estrellas_ganadas:Int
        total_destruccion:Int
        destruccion_realizada:Int
        liga:String
        tamano:Int
        terminada:Boolean
        puesto:Int
    }
    input GuerraInput{
        _id:String
        total_estrellas:Int
        estrellas_ganadas:Int
        total_destruccion_porcentaje:Float
        jugadores:[JugadorGuerraInput]
        ganada:Boolean
    }
    input JugadorGuerraInput{
        nombre:String
        ataques:[AtaqueInput]
    }
    input AtaqueInput{
        estrellas:Int
        porcentaje:Int
    }
    type Query {
        getMiembros:[Miembro]
        getLigas:[Liga]
        getGuerraById(id:String!):Guerra
        getLigaById(id:String!):Liga
        getGuerras(page:Int,guerrasPerPage:Int):[Guerra]
        getJuegos(page:Int,juegosPerPage:Int):[Juego]
        getJuegoById(id:String!):Juego
    }
    type Mutation {
        insertLiga:String
        updateGuerra(guerra:GuerraInput!):Int
        updateLiga(liga:LigaInput!):Int
        insertGuerra:String
        updateJuego(juego:JuegoInput!):Int
        insertJuego:String
    }
`
