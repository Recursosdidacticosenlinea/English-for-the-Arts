# English for the Arts

Sitio web de práctica autónoma de inglés con propósitos específicos (ESP) para la Escuela de Artes Plásticas y Audiovisuales, BUAP: Licenciaturas en Arte Digital, Artes Plásticas y Cinematografía.
Usa el mismo motor que *English for Communication* y *CAA English Practice*. Todo el contenido para alumnos está en inglés.

## Unidades (12)

Hay 4 unidades por nivel: una por carrera y una de tronco común (historia del arte, vida del estudiante o gestión cultural).

| Nivel | Unidad | Carrera / enfoque | Gramática / enfoque |
| --- | --- | --- | --- |
| A1 | Meet the Crew | Cinematografía: roles del equipo de filmación | verbo *to be*, adjetivos posesivos, presentarse |
| A1 | My Studio | Artes Plásticas: el taller y los materiales | there is / there are, some / any, preposiciones de lugar |
| A1 | Game On! | Arte Digital: personajes de videojuego | can / can't, adjetivos, orden del adjetivo |
| A1 | My Creative Routine | Común: la rutina de un estudiante de arte | presente simple, adverbios de frecuencia, at / on / in |
| A2 | Art Through Time | Común: historia del arte (Carrington, Posada, Kahlo) | pasado simple, was / were, preguntas Wh- |
| A2 | Storyboard | Cinematografía: tipos de plano y movimientos de cámara | presente continuo, foreground / background, secuenciadores |
| A2 | Level Up | Arte Digital: software, motores y videojuegos | comparativos, superlativos, (not) as … as |
| A2 | Opening Night | Artes Plásticas: organizar una exposición | going to / will, invitaciones |
| B1 | The Critic's Eye | Artes Plásticas: crítica estética | presente perfecto vs. pasado simple, lenguaje de opinión |
| B1 | The Pitch | Cinematografía: presentar un proyecto a productores | primer condicional, unless / as soon as, lenguaje persuasivo |
| B1 | Team Pipeline | Arte Digital: coordinar un equipo de animación o videojuego | must, have to, don't have to, mustn't, should |
| B1 | Art in the Community | Común: gestión cultural y arte comunitario | voz pasiva (presente y pasado), by + agente |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

En Speaking, la actividad 1 es **Listen and repeat**: el alumno escucha 6 oraciones de la unidad, las dice en voz alta y el navegador califica su pronunciación con reconocimiento de voz (igual que en CAA English). Funciona en Chrome, Edge y Safari; en Firefox el alumno escucha, se graba y marca "I practiced". La actividad 2 es la grabación individual que entregan como evidencia.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal con las unidades, filtros por nivel y buscador (también busca por carrera). |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad | `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `english-for-the-arts`.
2. Sube todo el contenido de esta carpeta (no la carpeta en sí).
3. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
4. El sitio queda en `https://TU-USUARIO.github.io/english-for-the-arts/`.

## Crear una unidad nueva (por ejemplo, para B2)

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon la carrera o materia en `subject` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html`. Para B2, agrega también `B2` en `GROUPS` y `LEVELS`.

## Notas

- El progreso se guarda en el navegador con la clave `arts:` (distinta de `esp:` y `caa:`), así que no se mezcla con los otros sitios.
- Los personajes de cada unidad tienen su voz (mujer/hombre) en `speakers` dentro de su `data.js`.
- `assets/config.js` está vacío: copia ahí la dirección del Apps Script y de la plataforma de speaking (pueden ser las mismas del otro sitio o unas nuevas).
