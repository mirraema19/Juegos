# Guía de Comandos de Git y GitHub

Esta guía proporciona una lista de comandos importantes para el manejo de Git y GitHub, junto con su sintaxis y ejemplos básicos.

## Configuración Inicial

Antes de comenzar a usar Git, debes configurar tu nombre de usuario y dirección de correo electrónico. Esto se utilizará en tus confirmaciones (commits) para identificar quién hizo los cambios.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Iniciar un nuevo repositorio Git en un directorio existente
git init

# Clonar un repositorio existente desde GitHub
git clone <URL_del_repositorio>

# Ver el estado de los cambios en tu repositorio
git status

# Agregar archivos al área de preparación (staging)
git add <nombre_del_archivo>

# Agregar todos los archivos modificados y eliminados al área de preparación
git add .

# Realizar un commit (confirmación) de los cambios
git commit -m "Mensaje descriptivo de los cambios"

# Deshacer cambios en el área de preparación
git reset <nombre_del_archivo>

# Deshacer cambios en el último commit (si aún no has confirmado)
git reset HEAD~1

