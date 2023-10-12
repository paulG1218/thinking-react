import express from "express";
import ViteExpress from 'vite-express'
import morgan from "morgan";
import axios from "axios";
import handlerFunctions from "./controller.js";

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())



  app.get('/invoices', handlerFunctions.getInvoices)

  app.post('/addinvoice', handlerFunctions.addInvoice)

  app.delete('/deleteInvoice/:id', handlerFunctions.deleteInvoice)

  app.put('/editInvoice/:id', handlerFunctions.editInvoice)

  ViteExpress.listen(app, 6969, () => console.log('listening on http://localhost:6969... haha nice'))