import { EventEmitter, Factory, Event, List } from "@webkadiz/event-emitter"

const emitter = new EventEmitter(new Factory(Event, List))

export default emitter
