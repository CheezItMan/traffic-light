import { createMachine } from 'xstate';
import { TrafficLightEvent } from './types/events';
import { TrafficLightState } from './types/states';

export const trafficLightMachine = createMachine<undefined, TrafficLightEvent, TrafficLightState >({
  id: 'trafficLight',
  initial: 'OFF',
  states: {
    ON: {
      on: { TURN_OFF: 'OFF', },
      initial: 'red',
      states: {
        green: {
          on: { NEXT: 'yellow' },
          after: {
            3500: 'yellow',
          },
        },
        yellow: {
          on: { NEXT: 'red' },
          after: {
            1500: 'red',
          },
        },
        red: {
          on: { NEXT: 'green' },
          after: {
            5000: 'green',
          },
        },
      },
    },
    OFF: {
      on: { TURN_ON: 'ON', },
    },
  },
});