# Cafe Americano

`cafe_americano` · cafeteria · tanda de **1 unidades** · 355 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 8.00 |
| Precio neto | S/ 6.7797 |
| Materia prima | S/ 2.0784 |
| Mano de obra directa | S/ 0.6253 |
| CIF de producción | S/ 0.5627 |
| **Costo unitario (CUF)** | **S/ 3.2664** |
| Utilidad bruta | S/ 3.5133 (51.8%) |
| Minutos de persona por unidad | 2.500 |
| Tandas por semana | 567.1 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L1 · Mezcla — Extracción de café

**258 g por unidad.** La tanda de masa rinde 258 g y la comparten 1 productos: cada uno paga por los gramos que se lleva, no una tanda entera.

| Insumo | Por tanda de masa | % panadero | Costo de la tanda |
|---|---|---|---|
| Cafe tostado y molido de especialidad (Villa Rica) | 18 g | — | S/ 1.32 |
| Agua filtrada y osmotizada | 240 ml | — | S/ 0.22 |
| | | | **S/ 1.54 por tanda** |

Costo heredado por unidad: **S/ 1.5384** (258 g × S/ 0.005963 por g).

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Vaso de carton 12 oz doble pared | 1 und | 1.000 | S/ 0.3800 |
| Tapa plastica para vaso 12 oz | 1 und | 1.000 | S/ 0.1600 |

**Materia prima por unidad:** masa S/ 1.5384 + rellenos S/ 0.0000 + directos S/ 0.0000 + empaque S/ 0.5400 = **S/ 2.0784**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa A · L1 Mezcla — Extracción de café

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Molienda y dosificado** | Se muelen y dosifican 18 g de cafe de especialidad por taza. | Barra de cafe | 0.5 | 0.5 | 0.4 | 0 | 1 min |
| 2 | **Extraccion** | Doble extraccion de espresso de 36 ml sobre agua caliente. | Barra de cafe | 0.7 | 0.7 | 1.0 | 1 | 3 min |

Minutos de persona por tanda de masa: **1.2**.

### Etapa C · L2 Producto — Cafe Americano (tanda de 1 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Alistado de barra** | Se purga la maquina, se calibra la molienda y se alista la estacion. | Barra de cafe | 0.4 | 0.1 | — | — | 3 min |
| 2 | **Calentado de agua** | La caldera lleva el agua filtrada a 93 C para la dilucion. | Barra de cafe | 0.2 | 0.0 | 1.1 | 1 | 4 min |
| 3 | **Servido** | Se sirve en vaso de 12 oz y se controla temperatura final. | Barra de cafe | 0.4 | 0.1 | — | — | 5 min |
| 4 | **Tapado y empaque** | Se tapa el vaso, se coloca faja de marca y se entrega en barra. | Barra de cafe | 0.3 | 0.0 | — | — | 5 min |

Minutos de persona por tanda de producto: **1.3**.

**Tiempo total desde el pesado hasta el empaque: 0.1 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Masa heredada | 1.200 | 48.0% | S/ 0.3001 |
| Pasos propios | 1.300 | 52.0% | S/ 0.3252 |
| **Total** | **2.500** | 100% | **S/ 0.6253** |

De la tanda propia, **0.2 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/cafe_americano.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
