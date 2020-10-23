import { Color, EventData } from '@nativescript/core';

/**
 * Declare color wheel definitions
 */
export declare class ColorWheel extends View {

  static colorSelectEvent = 'colorSelect';

  on(event: 'colorSelect', callback: (args: EventData) => void);
  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
}

export const colorProperty: Property<ColorWheel, string | Color>;

export declare interface ColorSelectEvent {
  color: Color;
  position: {
    x: number;
    y: number;
  }
  owner: ColorWheel
}
