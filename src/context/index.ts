import { create } from "zustand";

import { TLanguage } from "../hooks";
import { IBookingContext, IOpenContext, IResponseContext } from "../types";

interface IStates {
  booking?: IBookingContext;
  language?: TLanguage;
  open?: IOpenContext;
  response?: IResponseContext;
}

interface IActions {
  setBooking: (param: IBookingContext) => void;
  setLanguage: (lang: TLanguage) => void;
  setOpen: (param: IOpenContext) => void;
  setResponse: (param: IResponseContext) => void;
}

export const useGlobalStates = create<IActions & IStates>((set) => ({
  open: {
    historyAsideSwitch: false,
    historyDetailSwitch: false,
    homeAside: false,
  },
  setBooking: (booking: IBookingContext) => set({ booking }),
  setLanguage: (lang: TLanguage) => set({ language: lang }),
  setOpen: (open: IOpenContext) => set({ open }),
  setResponse: (response: IResponseContext) => set({ response }),
}));
