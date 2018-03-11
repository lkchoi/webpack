import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

const host = '{{ feathersClientUrl }}'

const socket = io(host, {
  transports: ['websocket'],
  forceNew: true
})

const client = feathers()

client.configure(socketio(socket))
client.configure(auth({
  storage: window.localStorage
}))

socket.on('connect', () => console.info(`socket connected to ${host}`))
socket.on('disconnect', (...args) => console.warn('socket disconnected', ...args))

client.service('users')

export default client
