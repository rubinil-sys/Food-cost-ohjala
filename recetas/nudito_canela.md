# Nudito de Canela

`nudito_canela` · nudito · tanda de **40 unidades** · 90 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 4.80 |
| Precio neto | S/ 4.0678 |
| Materia prima | S/ 1.3817 |
| Mano de obra directa | S/ 0.6607 |
| CIF de producción | S/ 0.4646 |
| **Costo unitario (CUF)** | **S/ 2.5070** |
| Utilidad bruta | S/ 1.5608 (38.4%) |
| Minutos de persona por unidad | 1.650 |
| Tandas por semana | 4.6 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Harina de trigo panadera (fuerza) | insumo directo | 60.0 g | S/ 0.2545 |
| Leche entera fresca | insumo directo | 22.5 g | S/ 0.1080 |
| Agua filtrada y osmotizada | insumo directo | 10.0 g | S/ 0.0090 |
| Mantequilla sin sal | insumo directo | 5.5 g | S/ 0.1796 |
| Huevo de gallina (granel) | insumo directo | 6.0 g | S/ 0.0548 |
| Levadura fresca prensada | insumo directo | 1.3 g | S/ 0.0156 |
| Azucar rubia | insumo directo | 10.5 g | S/ 0.0441 |
| Canela molida Ceylan | insumo directo | 1.1 g | S/ 0.0437 |
| Sal marina fina yodada | insumo directo | 0.8 g | S/ 0.0024 |

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Bolsa de papel kraft con ventana | 40 und | 1.000 | S/ 0.5500 |
| Etiqueta adhesiva impresa de marca | 40 und | 1.000 | S/ 0.1200 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 0.7117 + empaque S/ 0.6700 = **S/ 1.3817**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Nudito de Canela (tanda de 40 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Pesado y mezclado** | Masa enriquecida: huevo y mantequilla aparte. | Amasado y pesado | 9.0 | 2.7 | — | — | 9 min |
| 2 | **Amasado** | Amasadora espiral, 14 min. | Amasado y pesado | 5.0 | 0.6 | 14.0 | 14 | 28 min |
| 3 | **Division y boleado** | 40 piezas de 65 g. | Mesa de formado y trenzado | 14.0 | 1.7 | — | — | 42 min |
| 4 | **Anudado con canela** | Se estira, se espolvorea canela con azucar y se anuda. | Mesa de formado y trenzado | 24.0 | 2.9 | — | — | 66 min |
| 5 | **Fermentacion** | 70 min a 30 grados. | Camara de fermentacion | 2.0 | 0.2 | 70.0 | 70 | 2.3 h |
| 6 | **Horneado** | 13 min a 190 grados. | Horno rotativo | 3.0 | 0.9 | 13.0 | 13 | 2.6 h |
| 7 | **Enfriado y empaque** | Se enfria y se embolsa. | Enfriado y empaque | 9.0 | 2.7 | — | — | 2.7 h |

Minutos de persona por tanda de producto: **66.0**.

**Tiempo total desde el pesado hasta el empaque: 2.7 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 1.650 | 100.0% | S/ 0.6607 |
| **Total** | **1.650** | 100% | **S/ 0.6607** |

De la tanda propia, **11.7 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/nudito_canela.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
