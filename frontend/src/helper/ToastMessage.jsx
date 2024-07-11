import toast from "react-hot-toast";


export function showErrorToast(message) {
	toast.error(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		// theme: "light",
		theme: "colored",
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	})
}

export function showSuccessToast(message) {
	toast.success(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		// theme: "light",
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
}
