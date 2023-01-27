# ejemplo fetch y try catch finally

simple ejemplo con fetch y try catch finally

## Algunas validaciones adicionales que podrías agregar incluyen:

1. Verificar si el navegador del usuario soporta la funcionalidad fetch antes de intentar usarla.
2. Verificar si el tipo de respuesta es JSON antes de intentar parsearla.
3. Verificar si el tamaño de los datos recibidos es razonable, ya que una respuesta muy grande podría indicar un problema con la API o el endpoint.
4. Verificar si los datos recibidos tienen la estructura esperada antes de intentar usarlos.

```js
const getData = async (url = "") => {
  try {
    if (!url) throw new Error("URL is required");
    if (!window.fetch)
      throw new Error("Fetch API is not supported by your browser");
    renderLoading();
    await fakePromise();
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    if (!response.headers.get("content-type").includes("application/json"))
      throw new Error("Response is not a JSON");
    const data = await response.json();
    if (!data || typeof data !== "object")
      throw new Error("Data structure is not correct");
    renderData(data);
  } catch (error) {
    renderError(error);
    console.log(error);
  } finally {
    stopLoading();
  }
};
```
