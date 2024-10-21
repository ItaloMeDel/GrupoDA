import reflex as rx

class CounterState(rx.State):
    count: int = 0

    def add(self):
        self.count += 1

    def substract(self):
        self.count -= 1

def counter():
    return rx.box(
        rx.text(f"Contador: {CounterState.count}", font_size="24px", font_weight="bold"),
        rx.hstack(
            rx.button("Incrementar", on_click=CounterState.add(), color_scheme="green"),
            rx.button("Disminuir", on_click=CounterState.substract(), color_scheme="red"),
            spacing="10px"
        ),
        style={"margin-top": "20px", "text-align": "center"}
    )

def index():
    return rx.vstack(
        counter(),
        justify_content="center",
        align_items="center",
        style={"padding": "20px", "height": "100vh"}
    )

app = rx.App()

app.add_page(index, route="/")
