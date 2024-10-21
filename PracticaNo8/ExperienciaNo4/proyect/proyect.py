import reflex as rx
import httpx


class ClimaEstado(rx.State):
    city: str = "Arequipa"
    climate: dict = {}
    temperature: str = ""
    conditions: str = ""
    humidity: str = ""
    wind: str = ""

    def fetchClimate(self):
        api_key = "4ddbe4bdb3238b91126890092ad87188"
        url = f"http://api.openweathermap.org/data/2.5/weather?q={self.city}&appid={api_key}&units=metric"
        
        try:
            response = httpx.get(url)
            if response.status_code == 200:
                self.climate = response.json()
                
        except httpx.HTTPStatusError as e:
            print("Error", e)

    def setCity(self, city):
        self.city = city

    def setClimate(self):
        self.city = self.climate["name"]
        self.temperature = self.climate['main']['temp']
        self.conditions = self.climate['weather'][0]['description']
        self.humidity = self.climate['main']['humidity']
        self.wind = self.climate['wind']['speed']
    
def addCity():
    return rx.fragment(
        rx.input(
            placeholder="Ingresa la city...",
            value=ClimaEstado.city,
            on_change=lambda value: ClimaEstado.setCity(value),
        ),
        rx.button("Obtener Clima", on_click=lambda: ClimaEstado.fetchClimate()),  
        rx.button("Actualizar", on_click=lambda: ClimaEstado.setClimate()),
    )

def mostrar_clima(): 
    return rx.fragment(
        rx.heading(f"Clima en {ClimaEstado.city}"),
        rx.text(f"Temperatura: {ClimaEstado.temperature} °C"),
        rx.text(f"Condiciones: {ClimaEstado.conditions}"), 
        rx.text(f"humidity: {ClimaEstado.humidity}%"), 
        rx.text(f"Viento: {ClimaEstado.wind} m/s")  
    )

def index():
    return rx.vstack(
        addCity(),
        mostrar_clima(),
        justify_content="center",
        align_items="center",
        style={"padding": "20px", "height": "100vh"}
    )

app = rx.App()
app.add_page(index(), route="/")
