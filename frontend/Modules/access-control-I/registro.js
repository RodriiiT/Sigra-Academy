document.addEventListener('DOMContentLoaded', function() {
    // La referencia donde se van a inyectar los campos
    const contenedorDinamico = document.getElementById('dynamic-fields-container');

    if (!contenedorDinamico) return;

    // Solo se mostrará la selección de rol.
    // Nota: SVGs tomados de Heroicons (https://heroicons.com/)
    const htmlEstructura = `
        <div class="input-group">
            <label class="input-label" for="rolSelect">Rol Académico</label>
            <div class="input-control">
                <span class="input-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M20 21c0-3.5-3.5-6-8-6s-8 2.5-8 6" stroke-linecap="round"/></svg>
                </span>
                <select id="rolSelect" required style="width: 100%; border: none; outline: none; background: transparent; padding: 10px; color: #333;">
                    <option value="">-- Seleccionar --</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                </select>
            </div>
        </div>
        <div id="rol-extra-fields"></div>
    `;

    // Inyectar HTML
    contenedorDinamico.innerHTML = htmlEstructura;

    // Referencias al select y contenedor para campos dependientes del rol
    const rolSelect = document.getElementById('rolSelect');
    const rolExtraFields = document.getElementById('rol-extra-fields');

    const renderExtraFields = (rol) => {
        if (!rolExtraFields) return;

        if (rol === 'estudiante') {
            rolExtraFields.innerHTML = `
                <div class="input-group">
                    <label class="input-label" for="rep-names">Nombre del representante</label>
                    <div class="input-control">
                        <span class="input-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M20 21c0-3.5-3.5-6-8-6s-8 2.5-8 6" stroke-linecap="round"/></svg>
                        </span>
                        <input id="rep-names" type="text" placeholder="Ej. María José" required />
                    </div>
                </div>
                <div class="input-group">
                    <label class="input-label" for="rep-lastnames">Apellido del representante</label>
                    <div class="input-control">
                        <span class="input-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M20 21c0-3.5-3.5-6-8-6s-8 2.5-8 6" stroke-linecap="round"/></svg>
                        </span>
                        <input id="rep-lastnames" type="text" placeholder="Ej. Pérez Díaz" required />
                    </div>
                </div>
                <div class="input-group">
                    <label class="input-label" for="rep-id">Cédula del representante</label>
                    <div class="input-control">
                        <span class="input-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7l8 5 8-5" /><rect x="3" y="5" width="18" height="14" rx="2" /></svg>
                        </span>
                        <input id="rep-id" type="text" placeholder="Ej. V-12345678" required />
                    </div>
                </div>
                <div class="input-group">
                    <label class="input-label" for="rep-phone">Número del representante</label>
                    <div class="input-control">
                        <span class="input-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </span>
                        <input id="rep-phone" type="tel" placeholder="Ej. +58 412..." required />
                    </div>
                </div>
                <div class="input-group">
                    <label class="input-label" for="rep-email">Correo del representante</label>
                    <div class="input-control">
                        <span class="input-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7l8 5 8-5" /><rect x="3" y="5" width="18" height="14" rx="2" /></svg>
                        </span>
                        <input id="rep-email" type="email" placeholder="Ej. representante@correo.com" required />
                    </div>
                </div>
            `;
            return;
        }

        rolExtraFields.innerHTML = '';
    };

    // Render inicial (por si hay valor preseleccionado)
    renderExtraFields(rolSelect?.value);

    rolSelect?.addEventListener('change', (e) => {
        renderExtraFields(e.target.value);
    });

    // Handler para crear usuario al presionar "Aceptar"
    const btnAceptar = document.getElementById('btnAceptar');
    if (btnAceptar) {
        btnAceptar.addEventListener('click', async () => {
            const firstName = document.getElementById('names')?.value?.trim();
            const lastName = document.getElementById('lastnames')?.value?.trim();
            const email = document.getElementById('email')?.value?.trim();
            const phone = document.getElementById('phone')?.value?.trim();
            const password = document.getElementById('password')?.value || '';
            const confirmPassword = document.getElementById('confirm-password')?.value || '';
            const rol = document.getElementById('rolSelect')?.value || '';

            const repFirstName = document.getElementById('rep-names')?.value?.trim();
            const repLastName = document.getElementById('rep-lastnames')?.value?.trim();
            const repId = document.getElementById('rep-id')?.value?.trim();
            const repPhone = document.getElementById('rep-phone')?.value?.trim();
            const repEmail = document.getElementById('rep-email')?.value?.trim();

            // Validaciones mínimas
            if (!firstName || !lastName || !email || !phone || !password || !rol) {
                alert('Por favor completa todos los campos requeridos.');
                return;
            }

            // Validar teléfono: exactamente 12 dígitos
            const digitsOnlyPhone = (phone || '').replace(/\D/g, '');
            if (digitsOnlyPhone.length !== 12) {
                alert('El número de teléfono debe contener exactamente 12 dígitos.');
                return;
            }

            // Validar contraseñas: iguales, longitud mínima y complejidad
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Longitud mínima
            if ((password || '').length < 8 || (password || '').length > 20) {
                alert('La contraseña debe tener entre 8 y 20 caracteres.');
                return;
            }

            // Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial permitido (- _ + * / ?)
            const pwdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-_+\*\/\?]).+$/;
            if (!pwdRegex.test(password)) {
                alert('La contraseña debe contener al menos: una letra mayúscula, una letra minúscula, un número y uno de los caracteres permitidos: - _ + * / ?');
                return;
            }

            // Campos obligatorios si es estudiante
            if (rol === 'estudiante') {
                if (!repFirstName || !repLastName || !repId || !repPhone || !repEmail) {
                    alert('Completa todos los datos del representante.');
                    return;
                }
            }

            // Mapear rol a ID: profesor=2, estudiante=3
            const roleMap = { profesor: 2, estudiante: 3 };
            const role_id = roleMap[rol];
            if (!role_id) {
                alert('Selecciona un rol válido.');
                return;
            }

            const payload = {
                role_id,
                first_name: firstName,
                last_name: lastName,
                email,
                phone: digitsOnlyPhone,
                password_hash: password
            };

            const API_BASE = 'http://localhost:5200/api';
            try {
                const res = await fetch(`${API_BASE}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const data = await res.json();
                if (!res.ok) {
                    // Mostrar detalles si la validación Zod falló
                    let msg = data?.error || 'Error al crear el usuario';
                    const issues = data?.details?.issues || data?.details?.error?.issues;
                    if (Array.isArray(issues) && issues.length) {
                        const detailsText = issues.map(i => `${(i.path||[]).join('.')}: ${i.message}`).join('\n');
                        msg += `\n\nDetalles:\n${detailsText}`;
                    }
                    alert(msg);
                    return;
                }

                alert('Usuario creado correctamente');
                // Redirigir a la tabla de usuarios
                window.location.href = 'user-table.html';
            } catch (err) {
                alert('Error de red: ' + (err?.message || 'intenta nuevamente'));
            }
        });
    }
});