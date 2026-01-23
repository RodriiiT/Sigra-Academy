FROM nginx:alpine

# Copia los archivos estáticos de frontend. Si tu sitio principal está en otra carpeta,
# ajusta el contenido copiado según sea necesario.
WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
