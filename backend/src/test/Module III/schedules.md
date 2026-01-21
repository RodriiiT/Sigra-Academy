# Documentación de Endpoints: Schedules

---

Test ID: SCH-01 (Lectura de horarios de una sección)
● Método: GET
● Ruta: /api/schedules/section/1
● Descripción: Obtiene los horarios de una sección específica.
● Validación:
```json
[
  {
    "schedule_id": 1,
    "assignment_id": 6,
    "day_of_week": "Lunes",
    "start_time": "08:00",
    "end_time": "09:00",
    "classroom": "A115"
  },
  ...
]
```

---

Test ID: SCH-02 (Lectura de horario por ID)
● Método: GET
● Ruta: /api/schedules/schedule/1
● Descripción: Obtiene los detalles de un horario por su ID.
● Validación:
```json
{
  "schedule_id": 1,
  "assignment_id": 6,
  "day_of_week": "Lunes",
  "start_time": "08:00",
  "end_time": "09:00",
  "classroom": "A115"
}
```

---

Test ID: SCH-03 (Crear un nuevo horario)
● Método: POST
● Ruta: /api/schedules/create
● Descripción: Crea un nuevo horario para una asignación académica.
● Validación:
```json
{
  "schedule_id": 12,
  "assignment_id": 6,
  "day_of_week": "Lunes",
  "start_time": "08:00",
  "end_time": "09:00",
  "classroom": "A115",
  "status": "created"
}
```

---

Test ID: SCH-04 (Actualizar un horario)
● Método: PATCH
● Ruta: /api/schedules/update/11
● Descripción: Actualiza los datos de un horario existente.
● Validación:
```json
{
  "schedule_id": 11,
  "classroom": "B202",
  "status": "updated"
}
```

---

Test ID: SCH-05 (Eliminar un horario)
● Método: DELETE
● Ruta: /api/schedules/delete/11
● Descripción: Elimina un horario por su ID.
● Validación:
```json
{
  "schedule_id": 11,
  "status": "deleted"
}
```
