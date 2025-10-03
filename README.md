# 00029324_practica5_seccion2
# ¿Porqué se comporta exactamente igual que si lo hubiera cambiado por HTML puro?
Porque cuando pones etiquetas JSX en React, al final se transforman en HTML que el navegador interpreta. Si no usas lógica de React (como props o estado), el resultado es el mismo que escribir el HTML directamente.

# ¿Qué significa className en React? ¿las props tienen un limite? ¿Quién define las props?
className es el equivalente de class en HTML. Se usa así porque en JavaScript la palabra class ya está reservada, y className es la forma que React usa para aplicar clases CSS a un elemento.
Las props no tienen un límite fijo, puedes pasar tantas como se necesite. Y las define el componente padre que llama al componente hijo, enviando los valores como si fueran atributos. El hijo solo las recibe y las usa.
