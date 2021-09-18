export const post = (form) => {
	return new Promise((resolve, reject) => {
		try {
			const myStorage = window.localStorage
			const forms = JSON.parse(myStorage.forms || '{}')
			forms[form.id] = form
			myStorage.setItem('forms', JSON.stringify(forms))
			wait(() => resolve({ url: 'url' }))
		} catch (err) {
			reject(err)
		}
	})
}

export const get = (formId) => {
	return new Promise((resolve, reject) => {
		try {
			const myStorage = window.localStorage
			const forms = JSON.parse(myStorage.forms)

			wait(() => resolve(forms[formId]))
		} catch (err) {
			reject(err)
		}
	})
}
export const getAll = () => {
	return new Promise((resolve, reject) => {
		try {
			const myStorage = window.localStorage
			if (myStorage.forms) {
				wait(() => resolve(JSON.parse(myStorage.forms || {})))
			} else {
				wait(() => resolve({}))
			}
		} catch (err) {
			reject(err)
		}
	})
}

export const wait = (fn) => {
	setTimeout(fn, 1000)
}
