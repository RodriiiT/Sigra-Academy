# Ejecutar con Docker

Instrucciones rápidas para construir y levantar los servicios con Docker Compose.

Construir y ejecutar (modo foreground):

```bash
docker compose up --build
```

Levantar en segundo plano (detached):

```bash
docker compose up -d --build
```

Detener y eliminar contenedores y volúmenes:

```bash
docker compose down -v
```

Servicios expuestos por defecto:

- Backend: `http://localhost:3000`
- Frontend: `http://localhost` (puerto 80)
- MySQL: `localhost:3306` (usuario `root` / contraseña `examplepassword`)

Notas:

- Si tu `frontend` requiere una ruta específica al `index.html`, ajusta la copia en `frontend/Dockerfile`.
- Las migraciones/inicialización de la BD se carga usando `backend/resources/table.sql`.
- Ajusta credenciales en `docker-compose.yml` para producción.
