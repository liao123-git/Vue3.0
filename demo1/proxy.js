const dinner = {
    meal: "tacos"
};

const handler = {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        target[key] = value;

        console.log('update');
    }
}

const proxy = new Proxy(dinner, handler);
console.log(dinner.meal);
proxy.meal = 'changed';
console.log(dinner.meal);
