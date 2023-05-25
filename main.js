

const filteredList = dropDown.filter((name) => {
    name.categoryOptions.filter((sub) => {
        sub.subCategory.filter((model) => {
            return model.brand == 'Toyota';
        })
    })
});