import React, { useCallback, useContext, useState } from "react";
import Modal from "../components/layout/Modal/Modal";

const ModalContext = React.createContext();

export function useModalContext() {
	return useContext(ModalContext);
}

export function ModalProvider ({ children }) {
	const [controls, setControls] = useState({});

	const isOpen = useCallback((key) => controls[key], [controls])

	const getControl = useCallback(
		(key) => ({
			open: () => setControls((values) => ({...values, [key]: true})),
			close: () => setControls((values) => ({...values, [key]: false})),
		})
	, []);

	const createModal = useCallback((name, isPersistent = false) => {
		const key = Date.now();
		return {
			element: ({ children }) => <Modal id={key + name} isPersistent={isPersistent}>{children}</Modal>,
			...getControl(key + name)
		};
	}, [getControl]);

	return <ModalContext.Provider value={{ createModal, getControl, isOpen }}>{ children }</ModalContext.Provider>
}