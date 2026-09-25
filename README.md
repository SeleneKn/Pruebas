# Documentación del Proyecto: Funciones y Pruebas Unitarias con Jest

Este proyecto contiene un conjunto de funciones JavaScript básicas junto con sus respectivas pruebas unitarias desarrolladas utilizando **Jest**. El propósito es proporcionar una referencia clara sobre el funcionamiento del código, los casos de prueba evaluados.

---

## 📄 Descripción de Funciones y Pruebas

### 1. `calcularDescuento(precio, porcentaje)`
* **¿Qué hace la función?**
  Recibe un precio base y un porcentaje de descuento. Calcula el valor resultante tras aplicar dicho descuento.
* **¿Qué valida la prueba?**
  Verifica que el cálculo matemático del precio final sea correcto para distintos montos y porcentajes válidos.
* **Casos de prueba y resultados:**

| Caso de Prueba (Entrada) | Resultado Esperado | Valida |
| :--- | :--- | :--- |
| `calcularDescuento(1000, 20)` | `800` | Aplica un 20% de descuento a 1000 |
| `calcularDescuento(500, 10)` | `450` | Aplica un 10% de descuento a 500 |
| `calcularDescuento(400, 20)` | `320` | Aplica un 20% de descuento a 400 |

---

### 2. `validarPassword(password)`
* **¿Qué hace la función?**
  Comprueba si una contraseña cumple con las reglas de seguridad mínimas: al menos 8 caracteres, al menos una letra minúscula y al menos un número mediante expresiones regulares (Regex).
* **¿Qué valida la prueba?**
  Verifica que la función retorne `true` (verdadero) cuando cumple las condiciones y `false` (falso) cuando no cumple (por ejemplo, falta de números o longitud insuficiente).
* **Casos de prueba y resultados:**

| Caso de Prueba (Entrada) | Resultado Esperado | Valida |
| :--- | :--- | :--- |
| `validarPassword("abc12345")` | `true` | Contraseña válida (posee letras, números y 8+ caracteres) |
| `validarPassword("abcdef")` | `false` | Contraseña inválida (no contiene números) |
| `validarPassword("c1234567")` | `true` | Contraseña válida (posee letras, números y 8 caracteres) |

---

### 3. `celsiusAFahrenheit(celsius)`
* **¿Qué hace la función?**
  Convierte una temperatura expresada en grados Celsius a su equivalente en grados Fahrenheit utilizando la fórmula $(C \times \frac{9}{5}) + 32$.
* **¿Qué valida la prueba?**
  Comprueba la precisión matemática del conversor con temperaturas positivas, cero y negativas.
* **Casos de prueba y resultados:**

| Caso de Prueba (Entrada) | Resultado Esperado | Valida |
| :--- | :--- | :--- |
| `celsiusAFahrenheit(0)` | `32` | Punto de congelación del agua |
| `celsiusAFahrenheit(25)` | `77` | Temperatura ambiente típica |
| `celsiusAFahrenheit(-10)` | `14` | Temperaturas bajo cero |

---

### 4. `esMayorDeEdad(edad)`
* **¿Qué hace la función?**
  Determina si una persona es mayor de edad según la legislación estándar (18 años o más).
* **¿Qué valida la prueba?**
  Verifica que edades mayores o iguales a 18 devuelvan `true` y valores menores devuelvan `false`.
* **Casos de prueba y resultados:**

| Caso de Prueba (Entrada) | Resultado Esperado | Valida |
| :--- | :--- | :--- |
| `esMayorDeEdad(18)` | `true` | Edad límite de mayoría de edad |
| `esMayorDeEdad(25)` | `true` | Edad superior al límite |
| `esMayorDeEdad(16)` | `false` | Menor de edad |

---

### 5. `generarNombreCompleto(nombre, apellido)`
* **¿Qué hace la función?**
  Recibe dos cadenas de texto (nombre y apellido) y genera una frase con la estructura: `"El nombre completo es [nombre] [apellido]"`.
* **¿Qué valida la prueba?**
  Verifica que la cadena retornada contenga la estructura y nombres esperados.
* **Casos de prueba y resultados:**

| Caso de Prueba (Entrada) | Resultado Esperado | Valida |
| :--- | :--- | :--- |
| `generarNombreCompleto("Ana", "Martínez")` | `"El nombre completo es Ana Martínez"` | Formato correcto |
| `generarNombreCompleto("Luis", "Ramírez")` | `"El nombre completo es Luis Ramírez"` | Formato correcto |
| `generarNombreCompleto("José", "José")` | `"El nombre completo es José José"` | Manejo de nombres repetidos |

---

## ⚠️ Problemas Encontrados y Aprendizaje Durante el Desarrollo

Durante el desarrollo de la práctica y la implementación de las pruebas unitarias se presentaron los siguientes retos y aprendizajes:

1. **Uso de documentación para aserciones de texto (`toContain`):**
   * **Reto:** En el ejercicio 5 (Generador de nombres completos), inicialmente las pruebas no pasaban al evaluar el resultado en texto.
   * **Solución:** Consultando la documentación oficial de Jest se encontró el matcher `toContain`, el cual permitió validar de forma correcta que la cadena retornada contuviera la frase esperada. Mismo caso ocurrió al intentar validar salidas de texto (como en el manejo de mensajes/alertas de descuento válidos), donde el uso de `toContain` permitió hacer la prueba funcional y pasar el test de manera precisa.

2. **Refinamiento progresivo del código y manejo de Expresiones Regulares (Regex):**
   * **Reto:** El ejercicio sirvió para revisar y corregir continuamente la lógica de las funciones. En la validación de contraseña, la prueba fallaba devolviendo `false` de manera inesperada en casos que parecían correctos.
   * **Solución:** Al revisar a detalle la Expresión Regular (Regex) consultada en línea, se detectó que esta exigía caracteres especiales y letras mayúsculas obligatorias. Para cumplir con las indicaciones del profesor (hacer que la primera y la última prueba fueran verdaderas), se ajustó la Regex para validar únicamente los requisitos solicitados (mínimo 8 caracteres, al menos una letra y al menos un número), logrando así la validación correcta.

---
