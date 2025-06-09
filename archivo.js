document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos HTML
    const radioEmpresa = document.getElementById('Empresa');
    const radioIndependiente = document.getElementById('Independiente');
    const camposEmpresaDiv = document.getElementById('camposEmpresa');
    const razonSocialInput = document.getElementById('razon_social');
    const cuitInput = document.getElementById('cuit');

    // Función para actualizar la visibilidad y el estado de los campos
    function actualizarCamposEmpresa() {
        if (radioEmpresa.checked) {
            // Si "Empresa" está seleccionado
            camposEmpresaDiv.classList.remove('oculto'); // Mostrar el div
            razonSocialInput.setAttribute('required', 'true'); // Hacer los campos requeridos
            cuitInput.setAttribute('required', 'true');
        } else {
            // Si "Independiente" está seleccionado
            camposEmpresaDiv.classList.add('oculto'); // Ocultar el div
            razonSocialInput.removeAttribute('required'); // Remover el atributo required
            cuitInput.removeAttribute('required');
            // Opcional: limpiar los valores si el usuario los había llenado y cambió de opción
            razonSocialInput.value = ''; 
            cuitInput.value = '';
        }
    }

    // 2. Asignar escuchadores de eventos a los radio buttons
    radioEmpresa.addEventListener('change', actualizarCamposEmpresa);
    radioIndependiente.addEventListener('change', actualizarCamposEmpresa);

    // 3. Ejecutar la función una vez al cargar la página para establecer el estado inicial
    actualizarCamposEmpresa();
});