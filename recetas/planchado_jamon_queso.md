# Planchado de Jamon y Queso

`planchado_jamon_queso` · cafeteria · tanda de **20 unidades** · 210 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 15.50 |
| Precio neto | S/ 13.1356 |
| Materia prima | S/ 3.4684 |
| Mano de obra directa | S/ 1.6761 |
| CIF de producción | S/ 1.8198 |
| **Costo unitario (CUF)** | **S/ 6.9643** |
| Utilidad bruta | S/ 6.1713 (47.0%) |
| Minutos de persona por unidad | 5.350 |
| Tandas por semana | 3.5 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Harina de trigo panadera (fuerza) | insumo directo | 90.0 g | S/ 0.3818 |
| Agua filtrada y osmotizada | insumo directo | 52.5 g | S/ 0.0473 |
| Aceite vegetal de girasol | insumo directo | 4.5 g | S/ 0.0401 |
| Levadura fresca prensada | insumo directo | 1.8 g | S/ 0.0216 |
| Sal marina fina yodada | insumo directo | 1.6 g | S/ 0.0045 |
| Jamon ingles en bloque | insumo directo | 45.0 g | S/ 1.3404 |
| Queso edam en bloque | insumo directo | 35.0 g | S/ 1.2268 |
| Mantequilla sin sal | insumo directo | 6.0 g | S/ 0.1959 |

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Papel antigrasa para planchado | 20 und | 1.000 | S/ 0.0900 |
| Etiqueta adhesiva impresa de marca | 20 und | 1.000 | S/ 0.1200 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 3.2584 + empaque S/ 0.2100 = **S/ 3.4684**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Planchado de Jamon y Queso (tanda de 20 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Pesado y mezclado** | Masa de pan plano. | Amasado y pesado | 6.0 | 1.8 | — | — | 6 min |
| 2 | **Amasado** | 10 min. | Amasado y pesado | 4.0 | 0.5 | 10.0 | 10 | 20 min |
| 3 | **Division y estirado** | 20 discos de 90 g. | Mesa de formado y trenzado | 12.0 | 1.4 | — | — | 32 min |
| 4 | **Fermentacion corta** | 35 min. | Camara de fermentacion | 1.5 | 0.2 | 35.0 | 35 | 68 min |
| 5 | **Horneado del pan** | 9 min a 230 grados. | Horno rotativo | 2.5 | 0.3 | 9.0 | 9 | 80 min |
| 6 | **Armado del sandwich** | Se abre, se pone jamon y queso. | Mesa de formado y trenzado | 14.0 | 1.7 | — | — | 1.6 h |
| 7 | **Planchado al pedido** | Plancha 3 min por unidad, a pedido del cliente. | Barra de cafe | 60.0 | 7.2 | 60.0 | 60 | 3.6 h |
| 8 | **Servido** | Papel antigrasa y servilleta. | Barra de cafe | 7.0 | 0.8 | — | — | 3.7 h |

Minutos de persona por tanda de producto: **107.0**.

**Tiempo total desde el pesado hasta el empaque: 3.7 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 5.350 | 100.0% | S/ 1.6761 |
| **Total** | **5.350** | 100% | **S/ 1.6761** |

De la tanda propia, **13.9 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/planchado_jamon_queso.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
