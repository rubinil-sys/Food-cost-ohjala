# Jugo de Pina 400ml

`jugo_pina` · bebida · tanda de **12 unidades** · 400 g por pieza

> Datos de ejemplo del curso. No son los productos ni los costos reales de oh-jalá.

| | |
|---|---|
| Precio de lista (con IGV) | S/ 10.00 |
| Precio neto | S/ 8.4746 |
| Materia prima | S/ 2.4804 |
| Mano de obra directa | S/ 0.5211 |
| CIF de producción | S/ 0.3891 |
| **Costo unitario (CUF)** | **S/ 3.3906** |
| Utilidad bruta | S/ 5.0840 (60.0%) |
| Minutos de persona por unidad | 2.083 |
| Tandas por semana | 6.3 |

## 1 · Qué lleva

Tres niveles. **L0** son los insumos que se compran. **L1** son las preparaciones que se hacen con ellos y se guardan hechas: la masa y el relleno están **los dos en L1**, son hermanos y ninguno sale del otro. **L2** es este producto, que toma gramos de cada L1, les suma sus insumos directos y su empaque, y es donde la masa y el relleno recién se juntan.

### L2 · Directos del producto

| Insumo | Uso | Por unidad | Costo |
|---|---|---|---|
| Pina Golden entera | insumo directo | 250.0 g | S/ 1.6154 |
| Azucar blanca refinada | insumo directo | 10.0 g | S/ 0.0450 |
| Agua filtrada y osmotizada | insumo directo | 166.7 g | S/ 0.1500 |

### L2 · Empaque

| Insumo | Por tanda | Por unidad | Costo/unidad |
|---|---|---|---|
| Vaso PET 16 oz para jugo | 12 und | 1.000 | S/ 0.4200 |
| Tapa domo para vaso de jugo | 12 und | 1.000 | S/ 0.1800 |
| Sorbete de papel | 12 und | 1.000 | S/ 0.0700 |

**Materia prima por unidad:** masa S/ 0.0000 + rellenos S/ 0.0000 + directos S/ 1.8104 + empaque S/ 0.6700 = **S/ 2.4804**

## 2 · Proceso paso a paso

La columna **Reloj** es tiempo de calendario desde que arranca la masa: suma preparación, proceso y espera. Los minutos de persona son otra cosa — la cámara fermenta 90 minutos y al panadero le ocupa 2.

### Etapa C · L2 Producto — Jugo de Pina 400ml (tanda de 12 unidades)

| # | Paso | Qué se hace | Estación | Min persona | de los cuales preparación | Min máquina | Espera | Reloj |
|---|---|---|---|---|---|---|---|---|
| 1 | **Pelado y cubeado** | Se pela, se le saca el corazon y se corta en cubos. | Barra de cafe | 14.0 | 1.7 | — | — | 14 min |
| 2 | **Licuado** | Licuadora de vaso con hielo. | Barra de cafe | 6.0 | 0.7 | 4.0 | 4 | 24 min |
| 3 | **Servido y tapado** | Vaso PET, tapa domo y sorbete. | Barra de cafe | 5.0 | 0.6 | — | — | 29 min |

Minutos de persona por tanda de producto: **25.0**.

**Tiempo total desde el pesado hasta el empaque: 0.5 horas** por tanda.

| Nivel | Min persona por unidad | % | Costo por unidad |
|---|---|---|---|
| Pasos propios | 2.083 | 100.0% | S/ 0.5211 |
| **Total** | **2.083** | 100% | **S/ 0.5211** |

De la tanda propia, **3.0 minutos son preparación**: no cambian si se hornea media tanda. Por eso la tanda chica sale más cara por unidad.

---

## Historial de esta receta

Cada cambio a este archivo queda como un commit. Para verlo:

```
git log -p recetas/jugo_pina.md
```

En GitHub: el botón **History** de este archivo. Las versiones que se graban desde la aplicación (botón *Grabar versión* en la ficha) van a la tabla `receta_version` de Supabase, con autor y fecha, y no se pueden alterar después.
