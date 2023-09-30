export type TrafficLightState = 
  | { value: { ON: 'green', },
        context: undefined }
  | { value: { ON: 'yellow', },
        context: undefined }
  | { value: { ON: 'red', },
        context: undefined }
  | { value: 'OFF',
        context: undefined }
