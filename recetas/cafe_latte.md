# Cafe Latte

`cafe_latte` · bebida · tanda de **1 unidades** · 350 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 12.50 |
| Precio neto | S/ 10.5932 |
| Materia prima | S/ 2.9724 |
| Mano de obra directa | S/ 0.6753 |
| CIF de producción | S/ 0.9184 |
| **Costo unitario (CUF)** | **S/ 4.5661** |
| Utilidad bruta | S/ 6.0271 (56.9%) |
| Minutos de persona por unidad | 2.700 |
| Tandas por semana | 188.5 |

## 1 · Qué lleva

### Nivel 2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Cafe tostado y molido de especialidad (Villa Rica) | insumo directo | 18.0 g | S/ 1.3224 |
| Leche entera fresca | insumo directo | 220.0 g | S/ 1.0560 |
| Agua filtrada y osmotizada | insumo directo | 60.0 g | S/ 0.0540 |

### Nivel 2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Vaso de carton 12 oz doble pared | 1 und | 1.000 | S/ 0.3800 |
| Tapa plastica para vaso 12 oz | 1 und | 1.000 | S/ 0.1600 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 2.4324 + empaque S/ 0.5400 = **S/ 2.9724**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · Cafe Latte (tanda de 1 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Molienda y dosificado** | Molino de muela: 18 g por doble shot. | Barra de cafe | 0.6 | 0.1 | 0.4 | 0 | 1 min |
| 2 | **Extraccion** | Espresso de 25 a 30 s. | Barra de cafe | 0.5 | 0.1 | 0.5 | 0 | 2 min |
| 3 | **Texturizado de leche** | Vaporizado a 65 grados y vertido. | Barra de cafe | 1.1 | 0.1 | 0.6 | 1 | 4 min |
| 4 | **Servido** | Vaso, tapa y faja. | Barra de cafe | 0.5 | 0.1 | — | — | 4 min |

Minutos de persona por tanda de producto: **2.7**.

**Tiempo total desde el pesado hasta el empaque: 0.1 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 2.700 | 100.0% | S/ 0.6753 |
| **Total** | **2.700** | 100% | **S/ 0.6753** |

De la tanda propia, **0.3 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/cafe_latte.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
