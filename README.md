# sos-zenski-centar

## Instalacija
### Windows and macOS
Potrebno je instalirati
[Docker Desktop](https://www.docker.com/products/docker-desktop)

### Linux
Docker Compose se moze preuzeti sa
[release page](https://github.com/docker/compose/releases)

##Pokretanje

Otvoriti root folder projekta.
Napraviti .env fajl. 
```
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

Otvoriti CMD/PowerShell/Terminal

Uneti komande:
```
docker-compose up -d
docker logs -f CONTAINER
```