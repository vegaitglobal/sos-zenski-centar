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
[uputstvo](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
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

##Swagger

Da bi videli Swagger, neophodno je da se dohvati accessToken koriscenjem /api/Users/login api-ja.

1. Kada pokrenemo projekat, http://localhost:48201/swagger/index.html nam prikaze swagger stranicu

2. U User sekciji, nadjemo /api/Users/login i unesemo vrednosti u body params
Primer body-a sa kredencijalima:
```
  "email": "vanjastepanovic001@gmail.com",
  "password": "123456"
```

3. Prekopiramo vrednost accessToken-a koju smo dobili u response-u

4. Na vrhu stranice postoji Authorize button, kliknemo na njega

5. U value unesemo Bearer + prekopiranu vrednost iz treceg koraka i klik na Authorize 
```
Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbmphc3RlcGFub3ZpYzAwMUBnbWFpbC5jb20iLCJuYmYiOjE2MzMyMDUwNDEsImV4cCI6MTYzMzI5MTQ0MSwiaWF0IjoxNjMzMjA1MDQxfQ.zwfWggfdPaRcbQzxla67yt1e-wX50FDJjmyz6Ghhcvrx2Y11e2FxTJOb_WGM5gWf-wbrEE_gygXoKszfKEMGJg
```
Nakon ovoga, mozemo da koristimo i ostale request-ove i sa svakim request-om koji posaljemo, bice ukljucen i Authorization header koji nosi vrednost 'Bearer + accessToken'


