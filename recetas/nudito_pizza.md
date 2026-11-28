# Nudito de Pizza

`nudito_pizza` · nudito · tanda de **40 unidades** · 85 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 4.50 |
| Precio neto | S/ 3.8136 |
| Materia prima | S/ 1.6318 |
| Mano de obra directa | S/ 0.6704 |
| CIF de producción | S/ 0.5864 |
| **Costo unitario (CUF)** | **S/ 2.8886** |
| Utilidad bruta | S/ 0.9250 (24.3%) |
| Minutos de persona por unidad | 1.675 |
| Tandas por semana | 5.3 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Harina de trigo panadera (fuerza) | insumo directo | 60.0 g | S/ 0.2545 |
| Agua filtrada y osmotizada | insumo directo | 34.5 g | S/ 0.0311 |
| Aceite vegetal de girasol | insumo directo | 3.0 g | S/ 0.0267 |
| Levadura fresca prensada | insumo directo | 1.2 g | S/ 0.0144 |
| Sal marina fina yodada | insumo directo | 1.1 g | S/ 0.0031 |
| Azucar blanca refinada | insumo directo | 1.5 g | S/ 0.0068 |
| Salsa de tomate para pizza | insumo directo | 16.0 g | S/ 0.1617 |
| Queso edam en bloque | insumo directo | 13.0 g | S/ 0.4557 |
| Oregano seco | insumo directo | 0.3 g | S/ 0.0078 |

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Bolsa de papel kraft con ventana | 40 und | 1.000 | S/ 0.5500 |
| Etiqueta adhesiva impresa de marca | 40 und | 1.000 | S/ 0.1200 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 0.9618 + empaque S/ 0.6700 = **S/ 1.6318**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Nudito de Pizza (tanda de 40 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Pesado y mezclado** | Se pesan harina, liquidos y aditivos del lote. | Amasado y pesado | 8.0 | 2.4 | — | — | 8 min |
| 2 | **Amasado** | Amasadora espiral, 12 min. | Amasado y pesado | 5.0 | 0.6 | 12.0 | 12 | 25 min |
| 3 | **Division y boleado** | Se divide en 40 piezas de 60 g. | Mesa de formado y trenzado | 14.0 | 1.7 | — | — | 39 min |
| 4 | **Anudado y relleno** | Se estira, se unta salsa, queso y oregano y se anuda. | Mesa de formado y trenzado | 26.0 | 3.1 | — | — | 65 min |
| 5 | **Fermentacion** | 60 min a 30 grados. | Camara de fermentacion | 2.0 | 0.2 | 60.0 | 60 | 2.1 h |
| 6 | **Horneado** | 14 min a 210 grados. | Horno rotativo | 3.0 | 0.9 | 14.0 | 14 | 2.4 h |
| 7 | **Enfriado y empaque** | Se enfria en rejilla y se embolsa por unidad. | Enfriado y empaque | 9.0 | 2.7 | — | — | 2.5 h |

Minutos de persona por tanda de producto: **67.0**.

**Tiempo total desde el pesado hasta el empaque: 2.5 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 1.675 | 100.0% | S/ 0.6704 |
| **Total** | **1.675** | 100% | **S/ 0.6704** |

De la tanda propia, **11.6 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/nudito_pizza.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
