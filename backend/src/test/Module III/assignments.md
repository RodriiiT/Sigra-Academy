# Documentación de Endpoints: Assignments

---

Test ID: ASS-01 (Obtener asignaciones académicas de un estudiante)
● Método: GET
● Ruta: /api/assignments/student/3/courses
● Descripción: Obtiene todas las asignaciones académicas de un estudiante específico.
● Validación:
```json
[
  {
    "assignment_id": 1,
    "teacher_user_id": 2,
    "subject_id": 1,
    "section_id": 3,
    "course_name": "Matemáticas"
  },
  ...
]
```

---

Test ID: ASS-02 (Obtener cursos asignados a una sección)
● Método: GET
● Ruta: /api/assignments/section/3/courses
● Descripción: Obtiene los cursos asignados a una sección específica.
● Validación:
```json
[
  {
    "course_id": 1,
    "course_name": "Matemáticas",
    "teacher_user_id": 2
  },
  ...
]
```

---

Test ID: ASS-03 (Obtener cursos asignados a un profesor)
● Método: GET
● Ruta: /api/assignments/teacher/2/courses
● Descripción: Obtiene los cursos asignados a un profesor específico.
● Validación:
```json
[
  {
    "course_id": 1,
    "course_name": "Matemáticas",
    "section_id": 3
  },
  ...
]
```

---

Test ID: ASS-04 (Obtener detalles de un curso asignado)
● Método: GET
● Ruta: /api/assignments/course/1
● Descripción: Obtiene los detalles de un curso asignado por su ID.
● Validación:
```json
{
  "course_id": 1,
  "course_name": "Matemáticas",
  "teacher_user_id": 2,
  "section_id": 3
}
```

---

Test ID: ASS-05 (Obtener actividades de un curso asignado)
● Método: GET
● Ruta: /api/assignments/assignment/2/activities
● Descripción: Obtiene todas las actividades asociadas a un curso asignado.
● Validación:
```json
[
  {
    "activity_id": 1,
    "activity_name": "Examen Parcial"
  },
  ...
]
```

---

Test ID: ASS-06 (Obtener personas relacionadas a un curso asignado)
● Método: GET
● Ruta: /api/assignments/assignment/1/people
● Descripción: Obtiene todas las personas relacionadas a un curso asignado.
● Validación:
```json
[
  {
    "user_id": 1,
    "name": "Juan Pérez",
    "role": "Estudiante"
  },
  ...
]
```

---

Test ID: ASS-07 (Crear una nueva asignación académica)
● Método: POST
● Ruta: /api/assignments/create
● Descripción: Crea una nueva asignación académica.
● Validación:
```json
{
  "assignment_id": 12,
  "teacher_user_id": 2,
  "subject_id": 1,
  "section_id": 3,
  "status": "created"
}
```

---

Test ID: ASS-08 (Actualizar una asignación académica)
● Método: PATCH
● Ruta: /api/assignments/update/1
● Descripción: Actualiza los datos de una asignación académica existente.
● Validación:
```json
{
  "assignment_id": 1,
  "teacher_user_id": 2,
  "subject_id": 1,
  "section_id": 4,
  "status": "updated"
}
```

---

Test ID: ASS-09 (Eliminar una asignación académica)
● Método: DELETE
● Ruta: /api/assignments/delete/11
● Descripción: Elimina una asignación académica por su ID.
● Validación:
```json
{
  "assignment_id": 11,
  "status": "deleted"
}
```
