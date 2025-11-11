import { ReactNode } from 'react'

export interface CardParams {
    children: ReactNode;
    type: string;
    additionalClass?: string;
}

export interface LabelParams {
    text: string;
    additionalClass?: string;
}

export interface ButtonParams {
    url: string|null;
    text: string;
    className?: string;
}

export interface HeaderParams {
    text: string;
}