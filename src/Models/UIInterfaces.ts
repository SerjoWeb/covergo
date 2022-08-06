export interface InputInterface {
  type: string;
  name: string;
  placeholder?: string;
  minL?: number;
  maxL?: number;
  required?: boolean;
  id?: string;
  styles?: string;
  autoComplete?: string;
  changeHandler: (value: any) => void;
}

export interface SelectInterface {
  name: string;
  multiple?: boolean;
  required?: boolean;
  options: string[];
  styles?: string;
  placeholder?: string;
  id?: string;
  changeHandler: (value: any) => void;
}

export interface InputRadioInterface {
  type: string;
  name: string;
  info?: string;
  id?: string;
  value: string;
  styles?: string;
}

export interface RadioInterface {
  options: InputRadioInterface[];
  changeHandler: (value: any) => void;
}

export interface ButtonInterface {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  context: string;
  id?: string;
  styles?: string;
  view: string;
  clickHandler?: () => void;
}
