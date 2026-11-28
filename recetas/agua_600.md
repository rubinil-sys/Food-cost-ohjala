# Agua Mineral 600ml

`agua_600` · bebida · tanda de **1 unidades** · 600 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 3.50 |
| Precio neto | S/ 2.9661 |
| Materia prima | S/ 1.4500 |
| Mano de obra directa | S/ 0.1000 |
| CIF de producción | S/ 0.0747 |
| **Costo unitario (CUF)** | **S/ 1.6247** |
| Utilidad bruta | S/ 1.3414 (45.2%) |
| Minutos de persona por unidad | 0.400 |
| Tandas por semana | 143.7 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 0.0000 + empaque S/ 1.4500 = **S/ 1.4500**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Agua Mineral 600ml (tanda de 1 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Despacho en caja** | Se saca del conservador y se cobra. | Barra de cafe | 0.4 | 0.1 | — | — | 0 min |

Minutos de persona por tanda de producto: **0.4**.

**Tiempo total desde el pesado hasta el empaque: 0.0 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 0.400 | 100.0% | S/ 0.1000 |
| **Total** | **0.400** | 100% | **S/ 0.1000** |

De la tanda propia, **0.1 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/agua_600.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
