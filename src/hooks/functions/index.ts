import { Session } from "next-auth";
import { KeyboardEvent } from "react";

import { IDataResponse } from "@/src/types";

// ----------------------------

export const getErrorMessage = (error: unknown): string | undefined => {
  const errorMessage =
    error instanceof Error
      ? error.message
          .split("Message: ")
          .pop()
          ?.split(" ")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "An Unknown Error Occurred";

  return errorMessage;
};

// ----------------------------

const CURRENCY_SETTINGS = {
  EUR: {
    fractionDigits: 2,
    locale: "de-DE",
  },
  GBP: {
    fractionDigits: 2,
    locale: "en-GB",
  },
  IDR: {
    fractionDigits: 0,
    locale: "id-ID",
  },
  JPY: {
    fractionDigits: 0,
    locale: "ja-JP",
  },
  SGD: {
    fractionDigits: 2,
    locale: "en-SG",
  },
  USD: {
    fractionDigits: 2,
    locale: "en-US",
  },
};

type TCurrencyCode = keyof typeof CURRENCY_SETTINGS;

export const currencyFormat = (amount: number | string, currency: TCurrencyCode): string => {
  const { fractionDigits, locale } = CURRENCY_SETTINGS[currency] || CURRENCY_SETTINGS.IDR;

  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    throw new Error("Invalid amount value");
  }

  return new Intl.NumberFormat(locale, {
    currency,
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    style: "currency",
  }).format(numericAmount);
};

// ----------------------------

const ALLOWED_KEYS = ["ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"];

const createValidation =
  (regex: RegExp, additionalKeys: string[] = []) =>
  (e: KeyboardEvent) => {
    const allowedKeys = [...ALLOWED_KEYS, ...additionalKeys];
    if (!regex.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

export const inputValidations = {
  email: createValidation(/^[a-zA-Z0-9@._-]$/),
  name: createValidation(/^[a-zA-Z\s]$/),
  numeric: createValidation(/^\d$/),
  phoneNumber: createValidation(/\d/, ["a"]),
  username: createValidation(/^[a-z0-9]$/),
};

// ----------------------------

const EXPIRY_TIME = 30 * 24 * 60 * 60 * 1000;

const expired = (data: IDataResponse | null | undefined): boolean => {
  const questionnaire = data?.relation_questionnaire;
  const lastFilled = questionnaire?.[questionnaire.length - 1]?.createdAt;

  if (!lastFilled) {
    return true;
  }

  const timeCalc = new Date().getTime() - new Date(lastFilled).getTime();
  return timeCalc > EXPIRY_TIME;
};

export const questionnaireConditions = ({ data, session }: { data: IDataResponse | null | undefined; session: null | Session }): boolean =>
  session?.user?.role === "demo" || ((data?.relation_review?.length ?? 0) > 0 && (!data?.relation_questionnaire?.length || expired(data)));
