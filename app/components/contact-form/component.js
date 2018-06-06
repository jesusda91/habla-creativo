import Component from '@ember/component';
import { match } from '@ember/object/computed';

export default Component.extend({
	classNames: ["contact-form"],
	isValidEmail: match('email', /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),

	actions: {
		submitForm() {
			const { name, email, phone, city, comment } = this;
			let error = null;
			let errors = 0;
			if (!name) {
				error = 'El campo Nombre es obligatorio';
				errors++;
			}
			if (!email) {
				error = 'El campo Correo Electrónico es obligatorio';
				errors++;
			}
			if (!phone) {
				error = 'El campo Teléfono es obligatorio';
				errors++;
			}
			if (!city) {
				error = 'El campo Ciudad es obligatorio';
				errors++;
			}
			if (!comment) {
				error = 'El campo Comentario es obligatorio';
				errors++;
			}
			if (error) {
				if (errors>1) {
					error = 'Todos los campos son requeridos';
				}
				return swal(
					'Error!',
					error,
					'error'
				);
			}
			if (!this.get("isValidEmail")) {
				return swal(
					'Error!',
					'Correo Electrónico no válido',
					'error'
				);
			}
			return swal(
				'Exito!',
				'Datos enviados con exito',
				'success'
			);
		},
	}
});
