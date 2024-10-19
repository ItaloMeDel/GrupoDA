import reflex as rx

todas_las_tareas = [
    {"nombre": "Tarea 1", "estado": "Pendiente"},
    {"nombre": "Tarea 2", "estado": "En Progreso"},
    {"nombre": "Tarea 3", "estado": "Completada"},
    {"nombre": "Tarea 4", "estado": "Pendiente"},
    {"nombre": "Tarea 5", "estado": "Completada"},
    {"nombre": "Tarea 6", "estado": "En Progreso"},
]

def contar_tareas_por_estado(tareas):
    contadores = {"Pendiente": [], "En Progreso": [], "Completada": []}
    for tarea in tareas:
        contadores[tarea["estado"]].append(tarea["nombre"])
    return contadores


def index():
    contadores = contar_tareas_por_estado(todas_las_tareas)

    return rx.flex(
        rx.box(
            rx.text("Pendientes", font_size="24px", font_weight="bold", color="white"),
            *[rx.box(rx.text(tarea, color="black"),
                     style={"background-color": "#ffeb3b", "margin": "5px", "padding": "10px", "border-radius": "5px"})
              for tarea in contadores.get('Pendiente', [])],
            style={
                "background-color": "#f44336", "padding": "10px", "border-radius": "10px", "width": "30%",
                "min-height": "300px", "margin": "10px"
            }
        ),
        rx.box(
            rx.text("En Progreso", font_size="24px", font_weight="bold", color="white"),
            *[rx.box(rx.text(tarea, color="black"),
                     style={"background-color": "#bbdefb", "margin": "5px", "padding": "10px", "border-radius": "5px"})
              for tarea in contadores.get('En Progreso', [])],
            style={
                "background-color": "#2196f3", "padding": "10px", "border-radius": "10px", "width": "30%",
                "min-height": "300px", "margin": "10px"
            }
        ),

        rx.box(
            rx.text("Completadas", font_size="24px", font_weight="bold", color="white"),
            *[rx.box(rx.text(tarea, color="black"),
                     style={"background-color": "#c8e6c9", "margin": "5px", "padding": "10px", "border-radius": "5px"})
              for tarea in contadores.get('Completada', [])],
            style={
                "background-color": "#4caf50", "padding": "10px", "border-radius": "10px", "width": "30%",
                "min-height": "300px", "margin": "10px"
            }
        ),
        justify_content="space-around",
        style={"margin-top": "20px"}
    )

app = rx.App()

app.add_page(index, route="/")

