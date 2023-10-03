import { Router } from "express";
import FlightsRouter from "./Flights/flightsRoutes";
import ClientsRouter from "./Clients/clientsRoutes";
import TicketsRouter from "./Tickets/ticketsRoutes";

const Routers = Router();


Routers.use('/flight', FlightsRouter)
Routers.use('/clients', ClientsRouter)
Routers.use('/tickets', TicketsRouter)
