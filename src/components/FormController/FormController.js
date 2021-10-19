import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../App/context';
import Form from './Form/Form';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './FormController.module.css';
import SubmitController from './SubmitController/SubmitController';

const FormController = () => {
	const { state, windowWidth, discard } = useGlobalContext();
	const backdropRef = useRef();
	const isDesktop = windowWidth >= 768;

	const controller = (
		<>
			<div className={styles.backdrop} ref={backdropRef}></div>
			<div className={styles.formController}>
				{!isDesktop && (
					<Link to='/' onClick={discard} className={styles.goBack}>
						<IoIosArrowBack className={styles.arrow} /> Go Back
					</Link>
				)}
				<Form isDesktop={isDesktop} />
				<SubmitController />
			</div>
		</>
	);

	return ReactDOM.createPortal(controller, document.body);
};

export default FormController;
