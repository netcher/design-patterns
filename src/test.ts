const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
const transformations = {
    firstName: R.trim,
    lastName: R.trim, // Will not get invoked.
    data: {elapsed: R.add(1), remaining: R.add(-1)}
};
R.evolve<tomato>(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}

namespace R {

    export function evolve<T extends {[index: string]: any}>(transformations: ITransform<T>, data: T): T {
        let result = Object.assign({}, data);
        Object.keys(data).forEach((key) => {
            const item = data[key];
            const transformFunction = transformations[key];
            if (isObject(item) && isObject(transformFunction)) {
                result[key] = evolve(transformFunction, item);
            }
            result[key] = transformFunction ? transformFunction(item) : item;
        })
        return result;
    }

    type ITransform<T extends  {[index: string]: any}> = {
        [K in keyof T]: T[K] extends  {[index: string]: any} ? ITransform<T[K]> :(value: T[K]) => T[K]
    }
}

const isObject = (x: any): x is  {[index: string]: any} => typeof (x) === 'object';


type ITransform<T extends Object> = {
    [K in keyof T]: (value: T[K]) => T[K]
}
