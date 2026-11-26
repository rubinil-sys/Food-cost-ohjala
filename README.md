# Food Cost — Oh Jalá

Control de food cost para restaurante: costo aprovechable por merma, fichas
técnicas por porción, precio sugerido contra una meta, y cruce de consumo
real de almacén contra consumo teórico de recetas.

Aplicación de un solo archivo (`index.html`) con los datos en Supabase.

## Arquitectura

- **`index.html`** — toda la aplicación: estilos, marcado y lógica. Sin build.
- **Supabase** — Postgres gestionado. El navegador habla directo con la API
  REST usando la *publishable key*, que es pública por diseño; quien decide
  qué se puede leer y escribir son las políticas RLS de la base.
- **Render** — sirve el archivo como sitio estático.

## Modelo de datos

| Tabla | Qué guarda |
|---|---|
| `config` | Marca, subtítulo y logo (fila única) |
| `insumos` | Maestro: nombre, unidad, costo de compra, % de merma |
| `recetas` | Platos de carta y su precio de venta |
| `receta_ingredientes` | Ficha técnica: cantidad **neta** por porción |
| `periodos` | Mes de costeo + meta de food cost + regla de IGV |
| `kardex` | Inv. inicial, compras e inv. final **por periodo** |
| `ventas` | Unidades vendidas por plato **por periodo** |

El kardex y las ventas cuelgan del periodo: cambiar de mes no pisa el
histórico del anterior.

## Fórmulas

```
costo aprovechable  = costo de compra ÷ (1 − merma)
costo por porción   = Σ (cantidad neta × costo aprovechable)
food cost %         = costo por porción ÷ precio neto × 100
precio sugerido     = (costo por porción ÷ meta) × 1.18
consumo real        = inv. inicial + compras − inv. final
consumo teórico     = Σ (unidades vendidas × cantidad neta ÷ (1 − merma))
```

El consumo teórico se calcula en cantidad **bruta** de almacén, que es lo
que hace comparable la cifra contra el conteo físico del kardex.

## Configuración

Las credenciales están al inicio del `<script>` en `index.html`:

```js
const SUPABASE_URL = "https://<ref>.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_...";
```

## Seguridad

Las políticas RLS actuales permiten lectura y escritura a cualquiera que
tenga la URL. Sirve para una demo; **no metas datos reales ahí**. Para uso
real hay que activar Supabase Auth y reemplazar las políticas por unas
basadas en `auth.uid()`.
