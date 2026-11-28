# Capuccino

`cafe_capuccino` · bebida · tanda de **1 unidades** · 300 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 12.00 |
| Precio neto | S/ 10.1695 |
| Materia prima | S/ 2.7834 |
| Mano de obra directa | S/ 0.7253 |
| CIF de producción | S/ 0.9864 |
| **Costo unitario (CUF)** | **S/ 4.4951** |
| Utilidad bruta | S/ 5.6744 (55.8%) |
| Minutos de persona por unidad | 2.900 |
| Tandas por semana | 138.5 |

## 1 · Qué lleva

### Nivel 2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Cafe tostado y molido de especialidad (Villa Rica) | insumo directo | 18.0 g | S/ 1.3224 |
| Leche entera fresca | insumo directo | 170.0 g | S/ 0.8160 |
| Cacao en polvo alcalinizado | insumo directo | 1.5 g | S/ 0.0510 |
| Agua filtrada y osmotizada | insumo directo | 60.0 g | S/ 0.0540 |

### Nivel 2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Vaso de carton 12 oz doble pared | 1 und | 1.000 | S/ 0.3800 |
| Tapa plastica para vaso 12 oz | 1 und | 1.000 | S/ 0.1600 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 2.2434 + empaque S/ 0.5400 = **S/ 2.7834**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · Capuccino (tanda de 1 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Molienda y dosificado** | 18 g por doble shot. | Barra de cafe | 0.6 | 0.1 | 0.4 | 0 | 1 min |
| 2 | **Extraccion** | Espresso de 25 a 30 s. | Barra de cafe | 0.5 | 0.1 | 0.5 | 0 | 2 min |
| 3 | **Espumado** | Mas aire que el latte: espuma firme. | Barra de cafe | 1.2 | 0.1 | 0.6 | 1 | 4 min |
| 4 | **Servido y espolvoreado** | Cacao por encima, tapa y faja. | Barra de cafe | 0.6 | 0.1 | — | — | 4 min |

Minutos de persona por tanda de producto: **2.9**.

**Tiempo total desde el pesado hasta el empaque: 0.1 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 2.900 | 100.0% | S/ 0.7254 |
| **Total** | **2.900** | 100% | **S/ 0.7253** |

De la tanda propia, **0.3 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/cafe_capuccino.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
