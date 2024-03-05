import express from "express";
import cors from "cors";
import routerUsuario from "./Routes/UsuarioRouter";
import routerDescuento from "./Routes/DescuentoRouter"
import morgan from "morgan";

const app= express(); 

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(routerUsuario)
app.use(routerDescuento)
app.use(routerUsuario)


export default app
