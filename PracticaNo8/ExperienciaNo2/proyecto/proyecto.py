import reflex as rx

class TaskStatus(rx.State):
    tasks = ["Tarea 1", "Tarea 2"]

    def addTask(self, newTask):
        self.tasks.append(newTask)

def tasksList():
    return rx.fragment(
        rx.heading("Lista de Tareas"),
        rx.unordered_list(
            rx.foreach(TaskStatus.tasks, lambda tarea: rx.list_item(tarea))
        )
    )
    
class TextField(rx.State):
    text: str = ""
    
    def setText(self, text):
        self.text = text
        return None

def addTask():
    newTask = rx.input(placeholder="Agregar tarea...", value=TextField.text, on_change=TextField.setText)
    return rx.fragment(
        newTask,
        rx.button("Agregar", on_click=lambda: 
            TaskStatus.addTask(TextField.text)
        )
    )

def index():
    return rx.vstack(
        tasksList(),
        addTask(),
        justify_content="center",
        align_items="center",
        style={"padding": "20px", "height": "100vh"}
    )

app = rx.App()
app.add_page(index, route="/")
