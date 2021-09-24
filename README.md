# sos-zenski-centar

## Instalacija
### Windows and macOS
Potrebno je instalirati
[Docker Desktop](https://www.docker.com/products/docker-desktop)

U koliko nekome ne radi sa default podesavanjima, u PS ukucati:
```buildoutcfg
wsl --install
```

U slučaju da PS ne prepoznaje komandu, 
[uputsvo](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
za ručno podešavanje.
### Linux
Docker Compose se moze preuzeti sa
[release page](https://github.com/docker/compose/releases)

## Pokretanje

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