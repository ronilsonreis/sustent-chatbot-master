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
        'allEvents': 'allEventsAction'
      }
    }
  }
  chatbot.router
         .when(
           new TextCommand('/allevents', 'allEvents'), new EventsController()
         )

         chatbot.onMaster('new_chat_members', (msg) => {
            scope.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo !! Conte-nos um pouco sobre você, com o que trabalha e onde, se possivel é claro`)
         })