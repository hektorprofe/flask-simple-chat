# Flask simple chat

Clonado y modificado de https://github.com/samhita-alla/flask-chat-app-article 😁.

```
pip install -r requirements.txt
```

```
python server.py
```

Abrir http://localhost:5000 y poco más.

## Deploy en Heroku

Requisitos:

* Chocolatey
* Cuenta en Heroku


```
choco install heroku-cli
```

En el directorio de la app clonada con git:

```
git init
```

```
heroku login
```

```
heroku create
``````

```
git push heroku master
```

Y se abre la URL que te dan, por ejemplo en mi caso:

https://mysterious-refuge-34524.herokuapp.com/

Para reiniciar la webapp en heroku:

```
heroku restart
```

Para consultar los logs si ha ocurrido algún fallo:

```
heroku logs
```

Y para ejecutar comandos en el server:

```
heroku run <comando>
```
