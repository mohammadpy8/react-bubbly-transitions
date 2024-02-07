import React from "react";

declare const eventFormTypes: React.FormEvent<HTMLFormElement>;
declare const eventInputTypes: React.ChangeEvent<HTMLInputElement>;
declare const eventClickTypes: React.MouseEvent<HTMLButtonElement, MouseEvent>;
declare const eventFocusTypes: React.FocusEvent<HTMLInputElement, Element>;

declare namespace eventTypes {
  export type eventFormTypes = React.FormEvent<HTMLFormElement>;
  export type eventInputTypes = React.ChangeEvent<HTMLInputElement>;
  export type eventClickTypes = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  export type eventFocusTypes = React.FocusEvent<HTMLInputElement, Element>;
}
