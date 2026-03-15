# Módulo: Módulo de Estadísticas de Ventas (Arreglos)
**Alumno:** Kevin Leonardo Alonzo Hernandez
**Materia:** Ingeniería de Software - 6to Semestre  
**Escenario Asignado:** Estadísticas de Ventas

## 1. Descripción del Requisito Funcional (RF)
mi proyecto realiza un arreglo de la cantidad de ventas de se realizaron y al final se realiza el promedio de esas ventas, se realizaron pruebas dependiendo los diferentes tipos de casos que pudieron suceder como que el arreglo este vacio que significa que no hubo ventas y otro que si sale negativa alguna venta y asi entre otros casos.

## 2. Matriz de Casos de Prueba
| ID | Descripción del Caso | Entrada (Args) | Resultado Esperado | Clase de Equivalencia |
|----|----------------------|----------------|--------------------|-----------------------|
| CP-01 | [Ej: Recarga válida] | [Ej: 100, 50]  | [Ej: 150]          | Normal (Happy Path)   |
| CP-02 | [Ej: Valor mínimo]   | [Ej: 100, 10]  | [Ej: Error]        | Límite (Frontera)     |
| CP-03 | [Ej: Recarga válida] | [Ej: 100, 50]  | [Ej: 150]          | Normal (Happy Path)   |
| CP-04 | [Ej: Valor mínimo]   | [Ej: 100, 10]  | [Ej: Error]        | Límite (Frontera)     |
| CP-05 | [Ej: Recarga válida] | [Ej: 100, 50]  | [Ej: 150]          | Normal (Happy Path)   |
| CP-06 | [Ej: Valor mínimo]   | [Ej: 100, 10]  | [Ej: Error]        | Límite (Frontera)     |
| CP-07 | [Ej: Recarga válida] | [Ej: 100, 50]  | [Ej: 150]          | Normal (Happy Path)   |
| CP-08 | [Ej: Valor mínimo]   | [Ej: 100, 10]  | [Ej: Error]        | Límite (Frontera)     |
| CP-09 | [Ej: Recarga válida] | [Ej: 100, 50]  | [Ej: 150]          | Normal (Happy Path)   |
| CP-10 | [Ej: Valor mínimo]   | [Ej: 100, 10]  | [Ej: Error]        | Límite (Frontera)     |

## 3. Evidencia de Ejecución
[Aquí debe ir la captura de pantalla de la terminal con todos los tests en **PASS**]
C:\Users\kevin\26AIngSoft\git26AIngSoftTypeScript-\kevin\estadisticas ventas\Captura de pantalla 2026-03-14 233433.png

## 4. Historial de Desarrollo (Trazabilidad)
*El desarrollo se realizó de forma incremental mediante commits:*
10 Arreglo con valores null o undefined (si el tipo lo permite)
pv220112478
pv220112478
committed
3 days ago
9 Ventas representadas en binario/hex dentro del arreglo.
pv220112478
pv220112478
committed
3 days ago
8 Promedio que resulte en decimal periódico (validar precisión).
pv220112478
pv220112478
committed
3 days ago
7 Ventas todas iguales.
pv220112478
pv220112478
committed
3 days ago
6 Lista de ventas muy larga (100 elementos).
pv220112478
pv220112478
committed
3 days ago
Commits on Mar 11, 2026
5 Arreglo con números negativos (debe ignorarlos o lanzar error).
pv220112478
pv220112478
committed
3 days ago
4 ventas valor 0.
pv220112478
pv220112478
committed
3 days ago
Commits on Mar 10, 2026
3. Ventas con decimales.
pv220112478
pv220112478
committed
4 days ago
2. Arreglo con una sola venta.
pv220112478
pv220112478
committed
4 days ago
1. Arreglo vacío (debe retornar 0 o error).


