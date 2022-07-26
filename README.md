# nodejs_challenge

### run nodejs
```
npm init -y
npm install express
npm install nodemon
```
### cors
```
npm install cors --save
```

### grpc
```
npm install --save @grpc/grpc-js @grpc/proto-loader google-protobuf node-grpc-client
```

### body parser
```
npm install body-parser
```

### EJS Template Engine
```
npm install ejs
```

### mongoose
```
npm install mongoose
```

### dotenv
```
npm i dotenv
```

### uuid
```
npm install uuid-mongodb
```

### Go init
```
go mod init ""
```
### Go get package in project
```
go get google.golang.org/protobuf/cmd/protoc-gen-go
go get google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

### Install gRPC tool in project
```
go install google.golang.org/protobuf/cmd/protoc-gen-go
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
```
### Protobuf Generate
คำสั่งในการ generate protobuf
```
cd service/grpcServer
protoc --go_out=plugins=grpc:protobuf protobuf/example/example.proto

protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    protobuf/example/example.proto
```