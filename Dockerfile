# Stage 1: Build backend
FROM microsoft/dotnet:2.1-sdk AS dotnet-builder
WORKDIR /app

# caches restore result by copying csproj file separately
COPY server/*.sln .
COPY server/BidsPrototype.API/*.csproj ./BidsPrototype.API/
COPY server/BidsPrototype.Domain/*.csproj ./BidsPrototype.Domain/
COPY server/BidsPrototype.Infrastructure/*.csproj ./BidsPrototype.Infrastructure/
RUN dotnet restore

# copies the rest of your code
COPY server/. .
WORKDIR /app/BidsPrototype.API/
RUN dotnet publish --output out --configuration Release

# Stage 2: Build frontend
FROM node:8 AS node-builder
WORKDIR /app
COPY client/. .
RUN npm i
RUN npm run build


# Stage 3: Runtime
FROM microsoft/dotnet:2.1-aspnetcore-runtime
WORKDIR /app
COPY --from=dotnet-builder /app/BidsPrototype.API/out .
COPY --from=node-builder  /app/build ./wwwroot
ENTRYPOINT ["dotnet", "BidsPrototype.API.dll"]