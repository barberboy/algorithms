import input from "./input";

const anagrams = input.reduce((a: object, str: string) => {
    const key = str.split('').sort().join('');
    if (!(key in a)) {
        a[key] = [] as string[];
    }
    a[key].push(str);
    return a;
}, {});

const anagroups:string[][] = Object.values(anagrams)
const grouped = anagroups.reduce((array:string[], group:string[] ) => array.concat(group), [])

console.log(grouped)
