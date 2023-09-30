export type TrafficLightEvent = 
  | { type: 'NEXT', }
  | { type: 'TURN_OFF', }
  | { type: 'TURN_ON', };

