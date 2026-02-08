
export enum ValentineDay {
  ROSE = 'rose',
  PROPOSE = 'propose',
  CHOCOLATE = 'chocolate',
  TEDDY = 'teddy',
  PROMISE = 'promise',
  HUG = 'hug',
  KISS = 'kiss',
  VALENTINE = 'valentine'
}

export interface DayConfig {
  id: ValentineDay;
  title: string;
  date: string;
  icon: string;
  color: string;
  secondaryColor: string;
  description: string;
  prompt: string;
  visualUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
