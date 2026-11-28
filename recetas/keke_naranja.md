# Keke de Naranja (porcion)

`keke_naranja` · keke · tanda de **24 unidades** · 120 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 8.50 |
| Precio neto | S/ 7.2034 |
| Materia prima | S/ 2.6662 |
| Mano de obra directa | S/ 0.8768 |
| CIF de producción | S/ 1.2783 |
| **Costo unitario (CUF)** | **S/ 4.8213** |
| Utilidad bruta | S/ 2.3821 (33.1%) |
| Minutos de persona por unidad | 2.333 |
| Tandas por semana | 6.2 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Harina de trigo panadera (fuerza) | insumo directo | 62.5 g | S/ 0.2652 |
| Azucar blanca refinada | insumo directo | 45.8 g | S/ 0.2062 |
| Huevo de gallina (granel) | insumo directo | 37.5 g | S/ 0.3424 |
| Mantequilla sin sal | insumo directo | 27.1 g | S/ 0.8842 |
| Naranja Valencia para jugo y ralladura | insumo directo | 50.0 g | S/ 0.1889 |
| Polvo de hornear | insumo directo | 2.3 g | S/ 0.0321 |
| Leche entera fresca | insumo directo | 15.8 g | S/ 0.0760 |
| Sal marina fina yodada | insumo directo | 0.4 g | S/ 0.0012 |

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Bolsa de papel kraft con ventana | 24 und | 1.000 | S/ 0.5500 |
| Etiqueta adhesiva impresa de marca | 24 und | 1.000 | S/ 0.1200 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 1.9962 + empaque S/ 0.6700 = **S/ 2.6662**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Keke de Naranja (porcion) (tanda de 24 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Rallado y exprimido** | Se ralla la cascara y se exprime el jugo. | Mesa de formado y trenzado | 16.0 | 1.9 | — | — | 16 min |
| 2 | **Cremado y batido** | Batidora: mantequilla con azucar y huevos. | Amasado y pesado | 6.0 | 0.7 | 14.0 | 14 | 36 min |
| 3 | **Mezcla y vaciado** | Se integra harina y jugo, se vacia en dos moldes. | Amasado y pesado | 7.0 | 0.8 | — | — | 43 min |
| 4 | **Horneado** | 42 min a 170 grados. | Horno rotativo | 4.0 | 1.2 | 42.0 | 42 | 89 min |
| 5 | **Enfriado y cortado** | Se enfria y se corta en 24 porciones. | Enfriado y empaque | 15.0 | 1.8 | — | — | 1.7 h |
| 6 | **Empaque** | Bolsa con etiqueta. | Enfriado y empaque | 8.0 | 2.4 | — | — | 1.9 h |

Minutos de persona por tanda de producto: **56.0**.

**Tiempo total desde el pesado hasta el empaque: 1.9 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 2.333 | 100.0% | S/ 0.8768 |
| **Total** | **2.333** | 100% | **S/ 0.8768** |

De la tanda propia, **8.9 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/keke_naranja.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
