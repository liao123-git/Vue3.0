const dinner = {
    meal: "tacos",
    a: {
        b: [1, 2, 3, 4]
    }
};

function defineReactive(target, key, value) {
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            newValue !== value && (value = newValue);
            console.log('update');
        }
    });
}

for (let i in dinner) {
    defineReactive(dinner, i, dinner[i]);
}

console.log(dinner.meal);
dinner.meal = 'changed';
console.log(dinner.meal);

