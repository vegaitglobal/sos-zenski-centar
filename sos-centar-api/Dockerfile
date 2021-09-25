#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
EXPOSE 5000
ENV ASPNETCORE_URLS=http://*:5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY *.sln ./
COPY ["SosCentar.API/SosCentar.API.csproj", "SosCentar.API/"]
COPY ["SosCentar.BusinessLogic/SosCentar.BusinessLogic.csproj", "SosCentar.BusinessLogic/"]
COPY ["SosCentar.Contracts/SosCentar.Contracts.csproj", "SosCentar.Contracts/"]
COPY ["SosCentar.DataAccess/SosCentar.DataAccess.csproj", "SosCentar.DataAccess/"]
COPY ["SosCentar.Domain/SosCentar.Domain.csproj", "SosCentar.Domain/"]
RUN dotnet restore
COPY . .
WORKDIR "/src/SosCentar.API"

RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY ["data/", "data/"]
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SosCentar.API.dll"]