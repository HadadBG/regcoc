import json 

print ("\n\tSistema CLI para agregar una guerra a la base de dato de regcoc \n")
json_dict = {}
json_dict["total_estrellas"] = int(input("Total de estrellas:"))
json_dict["estrellas_ganadas"] = int(input("Estrellas ganadas:"))
json_dict["total_destruccion_porcentaje"] = float(input ("Porcentaje de destruccion total:"))
json_dict["isLiga"] = bool(input("Es liga de guerra de clanes (Y/ ):"))
total_jugadores = int(input("Total de jugadores:"))
json_dict["jugadores"]=[]
json_dict["ganada"] =  bool(input("Se gano (Y/ ):"))
for i in range(total_jugadores):
    nombre = input("Nombre del jugador "+str(i+1)+":")
    ataques=[]
    if(not json_dict["isLiga"] ) :
        estrellas =int(input("Estrellas 1 del jugador "+str(i+1)+":"))
        porcentaje = float(input("Porcentaje 1 del jugador "+str(i+1)+":"))
        ataques.append({"estrellas":estrellas,"porcentaje":porcentaje})
        estrellas= int(input("Estrellas 2 del jugador "+str(i+1)+":"))
        porcentaje= float(input("Porcentaje 2 del jugador "+str(i+1)+":"))
        ataques.append({"estrellas":estrellas,"porcentaje":porcentaje})
    else:
        estrellas = int(input("Estrellas del jugador "+str(i+1)+":"))
        porcentaje = float(input("Porcentaje del jugador "+str(i+1)+":"))
        ataques.append({"estrellas":estrellas,"porcentaje":porcentaje})
    json_dict["jugadores"].append({
            "nombre":nombre,
            "ataques":ataques
    })
with open("resultado.json", "w") as outfile:
    json.dump(json_dict, outfile)
print("Resultado escrito en resulatdo.json")
