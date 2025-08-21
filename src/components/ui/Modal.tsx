"use client";

import { ReactNode } from "react";
import {Button} from "./Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    }

    export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div>{children}</div>
            <div className="mt-4 flex justify-end">
            <Button variant="secondary" onClick={onClose}>Close</Button>
            </div>
        </div>
        </div>
    );
}
