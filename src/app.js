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
  get routes() {
      return {
        'allevents': 'allEventsAction'
      }
    }
  }
  chatbot.router
         .when(
           new TextCommand('/allevents', 'allEvents'), new EventsController()
         )

         