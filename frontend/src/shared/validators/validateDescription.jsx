export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200
}

export const descriptionValidationMessage = 'The description most have at least 10 or 200 characters'