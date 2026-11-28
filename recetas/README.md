# Recetas y procesos

Una ficha por producto: qué lleva, en qué orden se hace y cuánto tarda cada paso. Son los mismos datos que usa la aplicación — se generan desde `app_data2.json`, así que el archivo y el tablero no se pueden contradecir.

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| Producto | Tanda | Min persona / unidad | Materia prima | CUF | Ficha |
|---|---|---|---|---|---|
| Bagels x4 | 17 u | 5.471 | S/ 2.9592 | S/ 7.6399 | [ver](bagels_x4.md) |
| Agua Mineral 600ml | 1 u | 0.400 | S/ 1.4500 | S/ 1.6400 | [ver](agua_600.md) |
| Cafe Latte | 1 u | 2.700 | S/ 2.9724 | S/ 4.2554 | [ver](cafe_latte.md) |
| Capuccino | 1 u | 2.900 | S/ 2.7834 | S/ 4.1616 | [ver](cafe_capuccino.md) |
| Jugo de Fresa 400ml | 12 u | 1.667 | S/ 3.5116 | S/ 4.3037 | [ver](jugo_fresa.md) |
| Jugo de Pina 400ml | 12 u | 2.083 | S/ 2.4804 | S/ 3.4704 | [ver](jugo_pina.md) |
| Cafe Americano | 1 u | 2.500 | S/ 2.0784 | S/ 3.2664 | [ver](cafe_americano.md) |
| Planchado de Jamon y Queso | 20 u | 5.350 | S/ 3.4684 | S/ 6.6180 | [ver](planchado_jamon_queso.md) |
| Jala Canela Clasica | 24 u | 6.417 | S/ 6.1285 | S/ 11.0676 | [ver](jala_canela_clasica.md) |
| Jala Integral Clasica | 20 u | 6.900 | S/ 5.6360 | S/ 11.0578 | [ver](jala_integral_clasica.md) |
| Jala Nutella Clasica | 20 u | 7.463 | S/ 8.4719 | S/ 14.2472 | [ver](jala_nutella_clasica.md) |
| Jala Parmesano Clasica | 22 u | 6.915 | S/ 9.1432 | S/ 14.4789 | [ver](jala_parmesano_clasica.md) |
| Jala Plain Clasica | 24 u | 5.396 | S/ 4.8624 | S/ 9.1561 | [ver](jala_plain_clasica.md) |
| Jala Plain Mediana | 42 u | 3.238 | S/ 3.1818 | S/ 5.7334 | [ver](jala_plain_mediana.md) |
| Jala Pretzel Clasica | 28 u | 5.071 | S/ 3.4564 | S/ 7.4196 | [ver](jala_pretzel_clasica.md) |
| Jala Shabat Clasica | 18 u | 12.069 | S/ 5.3804 | S/ 14.1912 | [ver](jala_shabat_clasica.md) |
| Keke de Naranja (porcion) | 24 u | 2.333 | S/ 2.6662 | S/ 5.1153 | [ver](keke_naranja.md) |
| Nudito de Canela | 40 u | 1.650 | S/ 1.3817 | S/ 2.6083 | [ver](nudito_canela.md) |
| Nudito de Pizza | 40 u | 1.675 | S/ 1.6316 | S/ 2.8884 | [ver](nudito_pizza.md) |

## Cómo leer los tiempos

- **Preparación (setup)** — alistar, pesar, limpiar. No cambia si la tanda es media o entera.
- **Proceso** — escala con las unidades.
- **Espera** — la cámara o el horno trabajan solos: ocupan equipo, no persona.
- **Reloj** — tiempo de calendario acumulado desde el pesado. Sirve para saber a qué hora hay que empezar.

## De dónde sale cada archivo

`python3 exporta_recetas.py` en la carpeta de trabajo. No se editan a mano: se edita el dataset y se vuelve a exportar.

