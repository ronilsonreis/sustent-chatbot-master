'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('732752250:AAGeoK6qZCFNm7oDT-oFAbHbejojNdulUMw')

class EventsController extends TelegramBaseController {
    allEventsAction(scope) {
      let msg = `Implantação R2 - 26/10/201 - Evandro Mauricio\nImplantação SNI/CCY - 26/10/2018 - Ronilson de Lima`
  scope.sendMessage(msg)
    }
    
    allSiglaAction(scope) {
      let msg1 = `Escolaha sigla de sistemas que necessita atuar\nAR\nAT\nR2\nCCY`
  scope.sendMessage(msg1)
    }
  get routes() {
      return {
        'allEvents':'allEventsAction',
        'siglas':'allSiglaAction'
      }
    }
  }
  chatbot.router
         .when(
           new TextCommand('/allevents', 'allEvents'), new EventsController(),
           new TextCommand('/siglas', 'siglas'), new EventsController()
         )    

         
