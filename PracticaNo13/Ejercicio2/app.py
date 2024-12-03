from flask import Flask
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

app = Flask(__name__)

cred = credentials.Certificate("tienda-a54j31op-firebase-adminsdk-um6gd-886cd92716.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

refProducts = db.collection('productos')
refSellers = db.collection('vendedores')
refClients = db.collection('clientes')
refSales = db.collection('ventas')

def addProduct():
    name = input("Nombre del producto: ")
    description = input("Descripción: ")
    price = float(input("Precio unitario: "))
    unit = input("Unidad de medida: ")
    product = {
        "nombre": name,
        "descripcion": description,
        "precio": price,
        "unidad": unit
    }
    refProducts.add(product)
    print("Producto agregado con éxito.")

def deleteProduct():
    products = list(refProducts.stream())
    if not products:
        print("No hay productos para eliminar.")
        return

    print("\nProductos disponibles:")
    for index, prod in enumerate(products):
        print(f"{index + 1}. {prod.to_dict()['nombre']}")

    indexProd = int(input("Seleccione el producto a eliminar (número): ")) - 1
    productId = products[indexProd].id

    refProducts.document(productId).delete()
    print("Producto eliminado con éxito.")

def modifyProduct():
    products = list(refProducts.stream())
    if not products:
        print("No hay productos para modificar.")
        return

    print("\nProductos disponibles:")
    for index, prod in enumerate(products):
        print(f"{index + 1}. {prod.to_dict()['nombre']}")

    indexProd = int(input("Seleccione el producto a modificar (número): ")) - 1
    productId = products[indexProd].id
    currentProduct = products[indexProd].to_dict()

    print("\nDeje en blanco para mantener el valor actual.")
    newName = input(f"Nombre ({currentProduct['nombre']}): ") or currentProduct['nombre']
    newDescription = input(f"Descripción ({currentProduct['descripcion']}): ") or currentProduct['descripcion']
    newPrice = input(f"Precio unitario ({currentProduct['precio']}): ") or currentProduct['precio']
    newUnit = input(f"Unidad de medida ({currentProduct['unidad']}): ") or currentProduct['unidad']

    updatedProduct = {
        "nombre": newName,
        "descripcion": newDescription,
        "precio": float(newPrice),
        "unidad": newUnit
    }

    refProducts.document(productId).update(updatedProduct)
    print("Producto modificado con éxito.")

def listProducts():
    products = list(refProducts.stream())
    if not products:
        print("No hay productos registrados.")
        return

    print("\n--- LISTA DE PRODUCTOS ---")
    for prod in products:
        data = prod.to_dict()
        print(f"Nombre: {data['nombre']}, Descripción: {data['descripcion']}, "
              f"Precio: {data['precio']}, Unidad: {data['unidad']}")

def addSeller():
    name = input("Nombre del vendedor: ")
    dni = input("DNI: ")
    position = input("Cargo: ")
    seller = {
        "nombre": name,
        "dni": dni,
        "cargo": position
    }
    refSellers.add(seller)
    print("Vendedor agregado con éxito.")

def addClient():
    name = input("Nombre del cliente: ")
    dni = input("DNI: ")
    birthDate = input("Fecha de nacimiento (YYYY-MM-DD): ")
    email = input("Email: ")
    client = {
        "nombre": name,
        "dni": dni,
        "fecha_nacimiento": birthDate,
        "email": email
    }
    refClients.add(client)
    print("Cliente agregado con éxito.")

def registerSale():
    products = list(refProducts.stream())
    sellers = list(refSellers.stream())
    clients = list(refClients.stream())

    if not products or not sellers or not clients:
        print("No hay datos suficientes para registrar una venta.")
        return

    print("\nProductos disponibles:")
    for index, prod in enumerate(products):
        print(f"{index + 1}. {prod.to_dict()['nombre']}")

    indexProd = int(input("Seleccione el producto (número): ")) - 1
    product = products[indexProd].to_dict()

    print("\nVendedores disponibles:")
    for index, vend in enumerate(sellers):
        print(f"{index + 1}. {vend.to_dict()['nombre']}")

    indexSellers = int(input("Seleccione el vendedor (número): ")) - 1
    seller = sellers[indexSellers].to_dict()

    print("\nClientes disponibles:")
    for index, cli in enumerate(clients):
        print(f"{index + 1}. {cli.to_dict()['nombre']}")

    indexCli = int(input("Seleccione el cliente (número): ")) - 1
    client = clients[indexCli].to_dict()

    date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    sale = {
        "fecha": date,
        "producto": product['nombre'],
        "vendedor": seller['nombre'],
        "cliente": client['nombre']
    }
    refSales.add(sale)
    print("\nVenta registrada con éxito:")
    print(sale)

def main():
    while True:
        print("\n--- MENÚ ---")
        print("1. Agregar producto")
        print("2. Modificar producto")
        print("3. Eliminar producto")
        print("4. Listar productos")
        print("5. Agregar vendedor")
        print("6. Agregar cliente")
        print("7. Registrar venta")
        print("8. Salir")

        option = input("Seleccione una opción: ")
        if option == "1":
            addProduct()
        elif option == "2":
            modifyProduct()
        elif option == "3":
            deleteProduct()
        elif option == "4":
            listProducts()
        elif option == "5":
            addSeller()
        elif option == "6":
            addClient()
        elif option == "7":
            registerSale()
        elif option == "8":
            print("Saliendo del programa...")
            break
        else:
            print("Opción inválida. Intente de nuevo.")

if __name__ == "__main__":
    main()
