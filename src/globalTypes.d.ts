import React from "react";

declare const eventFormTypes: React.FormEvent<HTMLFormElement>;
declare const eventInputTypes: React.ChangeEvent<HTMLInputElement>;
declare const eventClickTypes: React.MouseEvent<HTMLButtonElement, MouseEvent>;
declare const eventFocusTypes: React.FocusEvent<HTMLInputElement, Element>;

declare namespace eventTypes {
  export interface eventFormTypes {} React.FormEvent<HTMLFormElement>;
  export type eventInputTypes = React.ChangeEvent<HTMLInputElement>;
  export type eventClickTypes = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  export type eventFocusTypes = React.FocusEvent<HTMLInputElement, Element>;
  export type localStorageTypes = {
    id: number;
    username: string;
    user: {
      fullName: string;
      phoneNumber: string;
    };
    role: string;
  };
}

declare namespace stateTypes {
  export interface stateGlobal {
    setStep(): (value: number) => void;
    setChangeModal(): (value: boolean) => void;
    setAccordion(): (value: number) => void;
  }
  export enum ggName{
    Write = 1 >>> 2,
    
  }
}
