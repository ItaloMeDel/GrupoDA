import reflex as rx

tareas_en_progreso = [
    {"nombre": "Tarea 2", "estado": "En Progreso"},
    {"nombre": "Tarea 4", "estado": "En Progreso"},
    {"nombre": "Tarea 6", "estado": "En Progreso"},
]

tareas_completadas = [
    {"nombre": "Tarea 3", "estado": "Completada"},
    {"nombre": "Tarea 5", "estado": "Completada"},
    {"nombre": "Tarea 7", "estado": "Completada"},

]

class State(rx.State):
    mostrar_solo_pendientes = False
    
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True
        
def tarjeta_tarea(tarea):
    return rx.fragment(
    tarea["titulo"],

    )
def columna_kanban(nombre, tareas):
    if State.mostrar_pendientes:
        tareas = [t for t in tareas if t["estado"] == "Pendiente"]
        return rx.fragment(
            rx.heading(nombre),
            rx.fragment(
                [tarjeta_tarea(tarea) for tarea in tareas]
            )
        )
def index():
    return rx.fragment(
        rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes),
        columna_kanban("En Progreso", tareas_en_progreso),
        columna_kanban("Completadas", tareas_completadas)
    )


app = rx.App()
app.add_page(index)
