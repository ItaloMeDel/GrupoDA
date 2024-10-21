import reflex as rx

class formStatus(rx.State):
    name: str = ""
    email: str = ""
    message: str = ""

    def sendForm(self):
        if "@" not in self.email:
            rx.window_alert("Error: Dirección de correo electrónico no válida")
        else:
            rx.window_alert("Formulario enviado correctamente")

    def setName(self, name):
        self.name = name

    def setEmail(self, email):
        self.email = email

    def setMessage(self, message):
        self.message = message

def form():
    style = {
        "margin": "10px 0",
        "width": "50%",
    }

    return rx.fragment(
        rx.heading("Formulario de Contacto"),
        rx.form(
            rx.input(placeholder="Nombre", on_change=lambda value: formStatus.setName(value), style=style),
            rx.input(placeholder="Correo electrónico", on_change=lambda value: formStatus.setEmail(value), style=style),
            rx.text_area(placeholder="Mensaje", on_change=lambda value: formStatus.setMessage(value), style=style),
            rx.button("Enviar", on_click=formStatus.sendForm, style={"margin-top": "10px"}),
            style={"display": "flex", "flexDirection": "column", "alignItems": "center"}
        )
    )

def index():
    return rx.vstack(
        form(),
        justify_content="center",
        align_items="center",
        style={
            "padding": "20px",
            "height": "100vh",
            "width": "100vw",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
        }
    )

app = rx.App()
app.add_page(index, route="/")
